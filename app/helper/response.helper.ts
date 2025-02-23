interface IResponse {
  success: boolean;
  message?: string;
  data: object | null | any;
}

export type ErrorResonse = IResponse & {
    error_code: number;
}

export const CreateResponse = (data: IResponse['data'], message?: string,):IResponse => {
    return {
        data, message , success : true
    }
}
