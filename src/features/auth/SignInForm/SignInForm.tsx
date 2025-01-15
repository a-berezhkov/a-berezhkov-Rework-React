import type { SignInFormType } from "./SignInForm.d";
import { useAppDispatch } from "../../../app/store/store";
import { signIn } from "../../../entities/auth/models/userThunks";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./SignInForm.module.css"; // Import CSS module
import Title from "antd/es/typography/Title";

function SignInForm() {
  const dispatch = useAppDispatch();

  const onFinish = async (values: SignInFormType) => {
    await dispatch(signIn(values));
  };

  return (
    <div className={styles.formContainer}>
      <Form
        name="signIn"
        onFinish={onFinish}
        layout="vertical"
        style={{ minWidth: 600, padding: "25px" }}
        initialValues={{ agreeToTerms: true }}
        className={styles.form}
      >
        <Title level={2} className={styles.formHeading}>
          Авторизация
        </Title>

        {/* username */}
        <Form.Item
          label="Логин"
          name="username"
          rules={[
            { required: true, message: "Пожалуйста, введите ваше имя логин!" },
            { min: 4, message: "Логин должен быть не менее 4 символов." },
            { max: 20, message: "Логин не может превышать 20 символов." },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Введите имя" />
        </Form.Item>

        {/* Password */}
        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            { required: true, message: "Введите пароль!" },
            {
              min: 6,
              message: "Пароль должен быть длиной не менее 6 символов.",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Введите пароль"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SignInForm;
