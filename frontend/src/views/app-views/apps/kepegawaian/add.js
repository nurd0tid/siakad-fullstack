import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddKepegawaian = () => {
  const [form] = Form.useForm();
  const history = useHistory();

  const onReset = () => {
    form.resetFields();
  };
  
  const onFinish = async (values) => {
      await axios.post('http://localhost:5000/api/kepegawaian',{
          stts_kepegawaian: values.stts_kepegawaian,
          keterangan: values.keterangan,
      });

      history.push("/app/apps/kepegawaian");
  };

  return (
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="stts_kepegawaian" label="Status Kepegawaian" rules={[{ required: true }]}>
          <Input/>
          </Form.Item>

          <Form.Item name="keterangan" label="Keterangan" rules={[{ required: true }]}>
          <Input/>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button className="mr-2" type="primary" htmlType="submit">Submit</Button>
            <Button className="mr-2" htmlType="button" onClick={onReset}>Reset</Button>
          </Form.Item>
      </Form>
  );
};

export class Add extends Component {
	render() {
		return (
    <div>
      <div className='code-box-form-demo'>
        <div className='basic'>
          <div className='code-box'>
            <section className='code-box-demo'>
              <AddKepegawaian />
            </section>
          </div>
        </div>
      </div> 
    </div> 
		)
	}
}

export default Add
