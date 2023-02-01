import React, { useEffect, useState } from 'react';
import StateBoard from './StateBoard';
import styles from './NavBar.module.scss';
import { requestAPI } from '../../api/requests';
import { TransactionDetail, Product } from '../../api/requestsTypes';

type Props = {};

const NavBar = (props: Props) => {
  const [allTrans, setAllTrans] = useState<TransactionDetail[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  useEffect(() => {
    const getTrans = async () => {
      const data = await requestAPI({
        type: 'GET',
        endpoint: '/products/transactions/all',
        page: 'admin',
      });
      setAllTrans(data?.data);
    };
    const getProducts = async () => {
      const data = await requestAPI({
        type: 'GET',
        endpoint: '/products',
        page: 'admin',
      });
      setAllProducts(data?.data);
    };
    getTrans();
    getProducts();
  }, []);

  const date = new Date();
  const today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

  const newOrder = allTrans.filter((el) => {
    return el.timePaid.slice(0, 10) === today;
  });

  const purchaseConfirmed = allTrans.filter((el) => {
    return el.done === true;
  });

  const purchaseCancel = allTrans.filter((el) => {
    return el.isCanceled === true;
  });

  let allIncome = 0;
  allTrans.forEach((el) => {
    if (el && el.done) {
      allIncome += el.product.price;
    }
  });

  return (
    <div className={styles.sideBar}>
      <StateBoard
        state='주문 현황'
        content1={newOrder.length}
        content2={purchaseConfirmed.length}
        content3={purchaseCancel.length}
      />
      <StateBoard
        state='거래 현황'
        content1={allProducts.length}
        content2={allIncome}
        content3={allTrans.length}
      />
    </div>
  );
};

export default NavBar;
