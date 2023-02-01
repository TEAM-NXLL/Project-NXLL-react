import React from 'react';
import { FaFileInvoiceDollar, FaCoins, FaDivide } from 'react-icons/fa';
import styles from './StateBoard.module.scss';

type Props = {
  state: string;
  content1: number;
  content2: number;
  content3: number;
};

const StateBoard = ({ state, content1, content2, content3 }: Props) => {
  const orderState = () => {
    return (
      <>
        <div className={styles.title}>
          <FaFileInvoiceDollar className={styles.icon} />
          <h3>{state}</h3>
        </div>
        <div className={styles.content}>
          <div className={styles.des}>
            <span className={styles.desTitle}>신규 주문</span>
            <span className={styles.desContent}>{content1}</span>
            <span className={styles.desUnit}>건</span>
          </div>
          <div className={styles.des}>
            <span className={styles.desTitle}>구매 확정</span>
            <span className={styles.desContent}>{content2}</span>
            <span className={styles.desUnit}>건</span>
          </div>
          <div className={styles.des}>
            <span className={styles.desTitle}>거래 취소</span>
            <span className={styles.desContent}>{content3}</span>
            <span className={styles.desUnit}>건</span>
          </div>
        </div>
      </>
    );
  };

  const payState = () => {
    return (
      <>
        <div className={styles.title}>
          <FaCoins className={styles.icon} />
          <h3>{state}</h3>
        </div>
        <div className={styles.content}>
          <div className={styles.des}>
            <span className={styles.desTitle}>전체 상품 수</span>
            <span className={styles.desContent}>{content1}</span>
            <span className={styles.desUnit}>개</span>
          </div>
          <div className={styles.des}>
            <span className={styles.desTitle}>전체 판매액</span>
            <span className={styles.desContent}>{content2.toLocaleString()}</span>
            <span className={styles.desUnit}>원</span>
          </div>
          <div className={styles.des}>
            <span className={styles.desTitle}>전체 거래 수</span>
            <span className={styles.desContent}>{content3}</span>
            <span className={styles.desUnit}>건</span>
          </div>
        </div>
      </>
    );
  };
  return <div className={styles.board}>{state === '주문 현황' ? orderState() : payState()}</div>;
};

export default StateBoard;
