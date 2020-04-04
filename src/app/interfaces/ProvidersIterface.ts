export interface DataCryptInterface {
  randonId(): string;
  hashCreate(password: string): Promise<string>;
  compareHash(password: string, hashPassord: string): Promise<boolean>;
}
