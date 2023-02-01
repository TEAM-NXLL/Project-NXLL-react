import { StringOptionsWithImporter } from 'sass';

// 전체 거래 조회
export interface TransactionDetail {
  detailId: string;
  user: {
    email: string;
    displayName: string;
    profileImg: string | null;
  };
  account: {
    backName: string;
    bankCode: string;
    accountNumber: string;
  };
  product: {
    productId: string;
    title: string;
    price: number;
    description: string;
    tags: string[];
    thumbnail: string | null;
  };
  reservation: Reservation | null;
  timePaid: string;
  isCanceled: boolean;
  done: boolean;
}

// 예약
export interface Reservation {
  start: string;
  end: string;
  isCanceled: boolean;
  isExpired: boolean;
}

// 전체 제품 조회
export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  tags: string[];
  thumbnail: string;
  isSoldOut: boolean;
}
