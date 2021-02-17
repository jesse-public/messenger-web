export interface Action {
  readonly type: string;
}

export interface AppState {
  readonly conversation: Conversation;
  readonly currentUser: CurrentUser;
}

export interface Conversation {
  readonly connectionUrl: string | null;
  readonly messages: string[];
  readonly recipient: Recipient | null;
}

export interface CurrentUser {
  readonly alias: string | null;
  readonly keySet: JsonWebKeySet | null;
}

export interface JsonWebKeySet {
  readonly privateDecryptionKey: JsonWebKey;
  readonly privateSigningKey: JsonWebKey;
  readonly publicEncryptionKey: JsonWebKey;
  readonly publicVerificationKey: JsonWebKey;
}

export interface Recipient {
  readonly alias: string;
  readonly publicEncryptionKey: JsonWebKey;
  readonly publicVerificationKey: JsonWebKey;
}
