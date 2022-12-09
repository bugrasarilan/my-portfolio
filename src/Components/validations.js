import * as yup from "yup";

const validations = yup.object().shape({
	name: yup
		.string()
		.required("Zorunlu alan."),
	subject: yup
		.string()
		.min(5, "konu  en az 5 karakter olmalıdır.")
		.required("Zorunlu alan."),
	email: yup
		.string()
		.email("Geçerli bir email girin.")
		.required("Zorunlu alan."),
	message: yup
		.string()
		.required("Zorunlu alan."),
});

export default validations;
