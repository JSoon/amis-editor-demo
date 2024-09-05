import React, {useState} from 'react';
import {Editor, ShortcutKey} from 'amis-editor';
import {inject, observer} from 'mobx-react';
import {RouteComponentProps} from 'react-router-dom';
import {toast, Select, ConfirmBox, FormField, InputBox} from 'amis';
import {currentLocale} from 'i18n-runtime';
import {Icon} from '../icons/index';
import {IMainStore} from '../store';
import '../editor/DisabledEditorPlugin'; // 用于隐藏一些不需要的Editor预置组件
import {getUrlHashQuery} from '../utils';
import axios from 'axios';

let currentIndex = -1;

let host = `${window.location.protocol}//${window.location.host}`;

// 如果在 gh-pages 里面
if (/^\/amis-editor-demo/.test(window.location.pathname)) {
  host += '/amis-editor';
}

const schemaUrl = `${host}/schema.json`;

const editorLanguages = [
  {
    label: '简体中文',
    value: 'zh-CN'
  },
  {
    label: 'English',
    value: 'en-US'
  }
];

// i-spark 接口基础路径
const BASE_API = window.VITE_APP_BASE_API;

export default inject('store')(
  observer(function ({
    store,
    location,
    history,
    match
  }: {store: IMainStore} & RouteComponentProps<{id: string}>) {
    const index: number = parseInt(match.params.id, 10);
    const curLanguage = currentLocale(); // 获取当前语料类型
    const editorType = getUrlHashQuery('editorType');

    function onInit() {
      // 编辑
      if (index !== -1) {
        store.updateSchema(store.pages[index].schema);
        // TODO: 通过 index 异步获取 i-spark 表单构建 schema
        //
      }
      // 新增
      else {
        store.updateSchema({
          type: 'page',
          title: '新增页面',
          regions: ['body']
        });
      }
    }

    function save() {
      // 新增页面不更新 page schema
      if (index !== -1) {
        store.updatePageSchemaAt(index);
        toast.success('保存成功', '提示');
      }
    }

    function onChange(value: any) {
      store.updateSchema(value);
      // 新增页面不更新 page schema
      if (index !== -1) {
        store.updatePageSchemaAt(index);
      }
    }

    function changeLocale(value: string) {
      localStorage.setItem('suda-i18n-locale', value);
      window.location.reload();
    }

    // 提交到 i-spark 表单构建
    const [submitVisible, setSubmitVisible] = useState(false);
    const [formName, setFormName] = useState('');
    async function submit() {
      if (!formName.trim()) {
        return toast.error('请输入表单名称');
      }
      console.log('submit', store.schema);
      const res = await axios({
        method: 'post',
        url: `${BASE_API}/systemTools/formBuild/${
          index === -1 ? 'insert' : 'update'
        }`,
        data: {
          id: index === -1 ? null : index,
          formName,
          schemaData: JSON.stringify(store.schema)
        }
      });
      const {code} = res.data;
      if (code !== 200) {
        return toast.error('提交失败');
      }
      // 成功后，刷新原页面，关闭设计器
      toast.success('提交成功');
      window.opener?.location.reload();
      setTimeout(() => {
        window.close();
      }, 1000);
    }

    function exit() {
      history.push(`/${store.pages[index].path}`);
    }

    return (
      <div className="Editor-Demo">
        <div className="Editor-header">
          <div className="Editor-title">amis 可视化编辑器</div>
          {/* <div className="Editor-view-mode-group-container">
            <div className="Editor-view-mode-group">
              <div
                className={`Editor-view-mode-btn editor-header-icon ${
                  !store.isMobile ? 'is-active' : ''
                }`}
                onClick={() => {
                  store.setIsMobile(false);
                }}
              >
                <Icon icon="pc-preview" title="PC模式" />
              </div>
              <div
                className={`Editor-view-mode-btn editor-header-icon ${
                  store.isMobile ? 'is-active' : ''
                }`}
                onClick={() => {
                  store.setIsMobile(true);
                }}
              >
                <Icon icon="h5-preview" title="移动模式" />
              </div>
            </div>
          </div> */}

          <div className="Editor-header-actions">
            <div className="flex mr-2">
              <ShortcutKey />
            </div>
            {/* <Select
              className="margin-left-space"
              options={editorLanguages}
              value={curLanguage}
              clearable={false}
              onChange={(e: any) => changeLocale(e.value)}
            /> */}
            {editorType !== 'form' || store.preview ? (
              <div
                className={`header-action-btn m-1 ${
                  store.preview ? 'primary' : ''
                }`}
                onClick={() => {
                  store.setPreview(!store.preview);
                }}
              >
                {store.preview ? '编辑' : '预览'}
              </div>
            ) : null}
            {!store.preview && (
              <>
                <div
                  className={`header-action-btn`}
                  onClick={() => setSubmitVisible(true)}
                >
                  提交
                </div>
                <div className={`header-action-btn exit-btn`} onClick={exit}>
                  退出
                </div>
              </>
            )}
          </div>
        </div>
        <div className="Editor-inner">
          <Editor
            theme={'cxd'}
            preview={store.preview}
            isMobile={store.isMobile}
            value={store.schema}
            onInit={onInit}
            onChange={onChange}
            onPreview={() => {
              store.setPreview(true);
            }}
            onSave={save}
            className="is-fixed"
            $schemaUrl={schemaUrl}
            showCustomRenderersPanel={true}
            amisEnv={{
              fetcher: store.fetcher,
              notify: store.notify,
              alert: store.alert,
              copy: store.copy
            }}
          />
        </div>
        {/* 表单提交弹窗 */}
        <ConfirmBox
          title={index === -1 ? '新增' : '编辑'}
          show={submitVisible}
          onCancel={() => setSubmitVisible(false)}
          onConfirm={submit}
        >
          <FormField type="input-text" label="表单名称" isRequired={true}>
            <InputBox
              placeholder="请输入表单名称，最多50字"
              maxLength={50}
              onChange={(value: string) => setFormName(value)}
            />
          </FormField>
        </ConfirmBox>
      </div>
    );
  })
);
