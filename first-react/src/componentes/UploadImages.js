import { useForm } from "react-hook-form";

function UploadImage() {

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("file", data.file[0]);

        const res = await fetch("http://localhost:8080/upload", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="file" {...register("file")} />
            <br />
            <br />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default UploadImage;

/*
file GET endpoint
http://localhost:8080/files/71525dc8-cc0c-4e7b-b53d-716095f7c0ae
*/