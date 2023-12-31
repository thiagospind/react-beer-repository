import { Beer } from "../../../interfaces/beer";

export interface BeerFormField {
  isError?: boolean;
  messageError?: string;
  value: string;
}

let isError: boolean = false;
let messageError: string = "";

export class ValidateBeerFields {
  public validateName(name: string): BeerFormField {
    if (!name) {
      isError = true;
      messageError = "Informe o nome da cerveja";
    }
    return {
      isError,
      messageError: messageError,
      value: name,
    };
  }

  public validateFormField(payload: Beer) {
    return {
      name: this.validateName(payload.name),
      abv: this.validateCompanyOfficialName(
        payload.company_official_name
          ? payload.company_official_name.trim()
          : payload.company_official_name
      ),
      color: this.validateRegistrationDoc(
        payload.registration_doc
          ? payload.registration_doc.trim()
          : payload.registration_doc
      ),
      brewery: this.validateCEP(
        payload.address_cep ? payload.address_cep.trim() : payload.address_cep
      ),
      style: this.validateCity(
        payload.address_city
          ? payload.address_city.trim()
          : payload.address_city
      ),
    } as FormPrecheckout;
  }
}
