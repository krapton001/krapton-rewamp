import React from 'react';
import LazyImg from '../LazyImg';
import styles from './styles.module.css';

const TechStack = ({
    heading = 'Exploring the Frontier of Technology',
    description = 'Where Innovation Meets Imagination this exploration is not just about understanding the latest gadgets or software but about immersing oneself in the realm where creative genius and technological prowess converge.',
}) => {
    return (
        <div className="tp-payment-method__area pb-150 mt-50">
            <div className="container g-0">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-feature-five-section-box text-center mb-40">
                            <h3 className=" text-black text-title">{heading}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-12">
                        <div className="tp-payment-method__wrapper text-center p-relative">
                            <div className="tp-payment-method__main-circle p-relative z-index">
                                <div className="tp-payment-method__main-img z-index-3">
                                    <LazyImg className={styles.main} src="/assets/custom_icons/logo_main.webp" />
                                </div>
                                <div className="tp-payment-method__line-1">
                                    <div className="tp-payment-method__circle circle-1" />
                                    <span>
                                        <LazyImg className={styles.techImg} src="assets/custom_icons/technologies/php.png" />
                                    </span>
                                </div>
                                <div className="tp-payment-method__line-2 d-none d-lg-block">
                                    <div className="tp-payment-method__circle circle-2" />
                                    <span>
                                        <LazyImg className={styles.techImg} src="assets/custom_icons/technologies/firebase.png" />
                                    </span>
                                </div>
                                <div className="tp-payment-method__line-3">
                                    <div className="tp-payment-method__circle circle-3" />
                                    <span>
                                        <LazyImg className={styles.techImg} src="assets/custom_icons/technologies/flutter.png" />
                                    </span>
                                </div>
                                <div className="tp-payment-method__line-4 d-none d-lg-block">
                                    <div className="tp-payment-method__circle circle-4" />
                                    <span>
                                        <LazyImg className={styles.techImg} src="assets/custom_icons/technologies/js.png" />
                                    </span>
                                </div>
                                <div className="tp-payment-method__line-5">
                                    <div className="tp-payment-method__circle circle-5" />
                                    <span>
                                        <LazyImg className={styles.techImg} src="assets/custom_icons/technologies/react.png" />
                                    </span>
                                </div>
                                <div className="tp-payment-method__line-6 d-none d-lg-block">
                                    <div className="tp-payment-method__circle circle-6" />
                                    <span>
                                        <LazyImg className={styles.techImg} src="assets/custom_icons/technologies/vue.png" />
                                    </span>
                                </div>
                                <div className="tp-payment-method__line-7">
                                    <div className="tp-payment-method__circle circle-7" />
                                    <span>
                                        <LazyImg className={styles.techImg} src="assets/custom_icons/technologies/swift.png" />
                                    </span>
                                </div>
                                <div className="tp-payment-method__line-8 d-none d-lg-block">
                                    <div className="tp-payment-method__circle circle-8" />
                                    <span>
                                        <LazyImg className={styles.techImg} src="assets/custom_icons/technologies/ngnx.png" />
                                    </span>
                                </div>
                                <div className="tp-payment-method__line-9">
                                    <div className="tp-payment-method__circle circle-9" />
                                    <span>
                                        <LazyImg className={styles.techImg} src="assets/custom_icons/technologies/python.png" />
                                    </span>
                                </div>
                                <div className="tp-payment-method__line-10 d-none d-lg-block">
                                    <div className="tp-payment-method__circle circle-10" />
                                    <span>
                                        <LazyImg className={styles.techImg} src="assets/custom_icons/technologies/laravel.png" />
                                    </span>
                                </div>
                                <div className="tp-payment-method__line-11">
                                    <div className="tp-payment-method__circle circle-11" />
                                    <span>
                                        <LazyImg className={styles.techImg} src="assets/custom_icons/technologies/mysql-logo.png" />
                                    </span>
                                </div>
                                <div className="tp-payment-method__line-12 d-none d-lg-block">
                                    <div className="tp-payment-method__circle circle-12" />
                                    <span>
                                        <LazyImg className={styles.techImg} src="assets/custom_icons/technologies/angular.png" />
                                    </span>
                                </div>
                                <div className="tp-payment-method__line-13">
                                    <div className="tp-payment-method__circle circle-13" />
                                    <span>
                                        <LazyImg className={styles.techImg} src="assets/custom_icons/technologies/node.png" />
                                    </span>
                                </div>
                                <div className="tp-payment-method__line-14 d-none d-lg-block">
                                    <div className="tp-payment-method__circle circle-14" />
                                    <span>
                                        <LazyImg className={styles.techImg} src="assets/custom_icons/technologies/kubernettes.png" />
                                    </span>
                                </div>
                                <div className="tp-payment-method__line-15">
                                    <div className="tp-payment-method__circle circle-15" />
                                    <span>
                                        <LazyImg className={styles.techImg} src="assets/custom_icons/technologies/docker.png" />
                                    </span>
                                </div>
                                <div className="tp-payment-method__line-16">
                                    <div className="tp-payment-method__circle circle-16" />
                                    <span>
                                        <LazyImg className={styles.techImg} src="assets/custom_icons/technologies/nextjs.webp" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechStack;
