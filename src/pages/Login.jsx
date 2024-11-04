import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useHistory } from "react-router-dom";
const initialFormData = {
  username: "",
};
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialFormData, mode: "onChange" });

  const { login } = useAuth();
  const history = useHistory();

  const onSubmit = () => {
    login(data.username);
    history.push("/home");
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Username:</label>
        <input
          type="text"
          {...register("username", { required: "bir şeyler yaz" })}
        />
        {errors.username && <span>{errors.username}</span>}
      </form>
      <button type="submit">Login</button>
    </div>
  );
}
