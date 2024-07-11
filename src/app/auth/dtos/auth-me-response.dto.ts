export class AuthMeResponseDTO {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly email: string,
  ) {}
}
