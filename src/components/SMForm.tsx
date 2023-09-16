import SMInput from "./SMInput"

type SMFormProps ={
    valueName: any,
    valueEmail: any,
    valueBody: any,
    onChangeName: ((...args: any[])=>any) | undefined;
    onChangeEmail: ((...args: any[])=>any) | undefined;
    onChangeBody: ((...args: any[])=>any) | undefined;
}
export default function SMForm(props: SMFormProps){
    const {valueName, valueEmail, valueBody, onChangeName, onChangeEmail, onChangeBody} = props
return (
    <>
    <SMInput label="Name" value={valueName} onChange={onChangeName} />
    <SMInput label="Email" value={valueEmail} onChange={onChangeEmail} />
    <SMInput label="Body" value={valueBody} onChange={onChangeBody} />
    </>
)
}