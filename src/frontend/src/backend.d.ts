import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactForm {
    name: string;
    email: string;
    message: string;
    phone: string;
}
export interface backendInterface {
    getAllContactForms(): Promise<Array<ContactForm>>;
    getAllContactFormsByEmail(): Promise<Array<ContactForm>>;
    getContactForm(id: bigint): Promise<ContactForm>;
    submitContactForm(name: string, email: string, phone: string, message: string): Promise<bigint>;
}
