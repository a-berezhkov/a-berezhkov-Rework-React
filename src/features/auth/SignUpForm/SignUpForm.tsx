import type { SignUpFormType } from "./SignUpForm.d";
import { useAppDispatch } from "../../../app/store/store";
import { signUp } from "../../../entities/auth/models/userThunks";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, } from "@ant-design/icons";
import styles from "./SignUpForm.module.css"; // Import CSS module
import Title from "antd/es/typography/Title";

function SignUpForm() {
  const dispatch = useAppDispatch();

  const onFinish = (values: SignUpFormType) => {
    dispatch(signUp(values));
  };

 
  return (
    <div className={styles.formContainer}>
      <Form
        name="register"
        onFinish={onFinish}
        layout="vertical"
        style={{ minWidth: 600, padding: "25px" }}
        initialValues={{ agreeToTerms: true }}
        className={styles.form}
      >
        <Title level={2} className={styles.formHeading}>
          Регистрация
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
        {/* first_name */}
        <Form.Item
          label="Имя"
          name="first_name"
          rules={[
            { required: true, message: "Пожалуйста, введите свое имя!" },
            { min: 4, message: "Имя пользователя должно быть не менее 4 символов." },
            { max: 20, message: "Имя пользователя не может превышать 20 символов." },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Введите имя" />
        </Form.Item>

        {/* last_name */}
        <Form.Item
          label="Фамилия"
          name="last_name"
          rules={[
            { required: true, message: "Пожалуйста, введите свою фамилию!" },
            { min: 4, message: "Фамилия должна быть длиной не менее 4 символов." },
            { max: 20, message: "Фамилия не может превышать 20 символов." },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Введите фамилию" />
        </Form.Item>

        {/* Password */}
        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            { required: true, message: "Введите пароль!" },
            { min: 6, message: "Пароль должен быть длиной не менее 6 символов." },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Введите пароль"
          />
        </Form.Item>

        {/* Confirm Password */}
        <Form.Item
          label="Повторите пароль"
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Пожалуйста, подтвердите свой пароль!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Пароли не совпадают!"));
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Повторите пароль"
          />
        </Form.Item>

        {/* last_name */}
        {/* Telegram Username */}
        <Form.Item
          label="Telegram Username"
          name="telegram"
          rules={[
            { required: true, message: "Введите ник в Telegram!" },
            {
              pattern: /^[a-zA-Z0-9_]{5,32}$/,
              message:
                "Ник в TG должен состоять из 5-32 символов и может содержать только буквы, числа, нижнее подчеркивание.",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Введите ник в Telegram"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Зарегистрироваться
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SignUpForm;
