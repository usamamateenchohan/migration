import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Upload, Select } from 'antd'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'

const { Option } = Select;

const EmailEditorToolbar = () => {

  const [editorState, setEditorState] = useState(BraftEditor.createEditorState('<p>Hello <b>World!</b></p>'))
  const [outputHTML, setOutputHTML] = useState('<p></p>')
  const [isLivinig, setIsLivinig] = useState(true)

  useEffect(() => {
    setIsLivinig(isLivinig)
    setTimeout(setEditorContentAsync, 3000)

    return () => {
      setIsLivinig(false)
    }
  }, [])

  const handleChange = (editorState) => {
    setEditorState(editorState)
    setOutputHTML(editorState.toHTML())
  }

  const setEditorContentAsync = () => {
    isLivinig && setEditorState(BraftEditor.createEditorState('<p>You can type here <b>everything</b><p>'))
  }

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <div className="email-editor-toolbar">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >

        <Form.Item
          name="email"
          rules={[{ type: 'email', required: true, message: 'Please select the user mail!' }]}
        >
          <Select
            showSearch
            placeholder="To"
            optionFilterProp="children"
            // onChange={onChange}
            // onFocus={onFocus}
            // onBlur={onBlur}
            // onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">example@gmail.com</Option>
            <Option value="lucy">jhone@gmail.com</Option>
            <Option value="tom">micheal@gmail.com</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="subject"
          rules={[{ required: true, message: 'Please input your subject!' }]}
        >
          <Input placeholder="Subject" />
        </Form.Item>

        <Form.Item
          name="text_edior"
        >
          <div className="editor-wrapper">
            <BraftEditor
              value={editorState}
              onChange={handleChange}
            />
          </div>
        </Form.Item>

        <div className="file-uploader" >
          <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
            <Upload.Dragger name="files" action="/upload.do">
              <p className="ant-upload-text">Drop files here to upload</p>
            </Upload.Dragger>
          </Form.Item>
        </div>

        <Form.Item>
          <div className="email-editor-btns">
            <Button className="login-form-button" type="primary">
              CANCEL
            </Button>
            <Button className="login-form-button" type="primary" htmlType="submit">
              SEND NOW
            </Button>
          </div>
        </Form.Item>
      </Form>
      {/* <h5>Text Editor Output here:</h5>
      <div className="output-content">{outputHTML}</div> */}
    </div>
  )
}

export default EmailEditorToolbar;