import React, { Component } from 'react';
import styled from 'styled-components';



const Container = styled.div`
  .vfes-card-box-new {
        background: #fff;
        margin: 20px auto;
        max-width: 380px;

        .vfes-rate-data-list {
            font-size: 0;
            margin: 0;
            padding: 0;
            position: relative;

            .vfes-rate-data {
                display: inline-block;
                list-style-type: none;
                padding: 15px;
                text-align: left;
                width: 50%;

                &--mid-row {
                    background: #f4f4f4;
                }

                &__title {
                    &-text {
                        font-family: 'VodafoneLight', Helvetica, Arial, sans-serif;
                        font-size: 20px;
                        margin: 0;
                    }
                }

                &__price {
                    &-text {
                        font-family: 'VodafoneRegularBold', Helvetica, Arial, sans-serif;
                        font-size: 24px;
                        text-align: right
                    }

                }

                &__gb {
                    &-text {
                        font-size: 18px;
                        font-family: 'VodafoneRegular', Helvetica, Arial, sans-serif;
                    }
                }

                &__mg {
                    &-text {
                        font-size: 18px;
                        font-family: 'VodafoneRegular', Helvetica, Arial, sans-serif;
                    }
                }
            }

           

            /* &__detail {

                &-price {
                    font-family: 'VodafoneRegularBold', Helvetica, Arial, sans-serif;
                    font-size: 18px;
                }
            } */
        }

        &--closed {
            max-width: 300px;
            .vfes-rate-data-list {
                .vfes-rate-data {
                    padding: 20px;
                    &__title {
                        display: none;
                    }

                    &__price {
                        display: block;
                        margin-left: auto;
                    }

                    &__gb {
                        top: 0;
                        &-text{
                            font-size: 16px;
                        }
                    }

                    &__mg {
                        top: 30px;
                        &-text{
                            font-size: 16px;
                        }
                    }

                    &--mid-row {
                        background: #fff;
                        left: 0;
                        padding: 5px 15px;
                        position: absolute;
                    }
                }
            }
            .vfes-card-box-new__content{
                display: none;
            }
        }

        &__content{
            padding: 15px;
            .vfes-button {
                min-width: 276px;
            }
        }
       
    }
`;

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        };
    }
    render() {
        const { data } = this.state;

        return (

            <Container>
                <div class="vfes-card-shop vfes-box-shadow vfes-card-box-new  vfes-sticky-item" data-js="sticky-item">
                        <ul class="vfes-rate-data-list">
                            <li class="vfes-rate-data vfes-rate-data__title">
                                <h3 class="vfes-rate-data__title-text">One limitada 1</h3>
                            </li>
                            <li class="vfes-rate-data vfes-rate-data__price">
                                <p class="vfes-rate-data__price-text">49,99€</p>
                            </li>
                            <li class="vfes-rate-data vfes-rate-data--mid-row vfes-rate-data__gb">
                                <p class="vfes-rate-data__gb-text">3GB y 200 min</p>
                            </li>
                            <li class="vfes-rate-data vfes-rate-data--mid-row vfes-rate-data__mg">
                                <p class="vfes-rate-data__mg-text">100MB</p>
                            </li>
                        </ul>
                        <div class="vfes-card-box-new__content" aria-expanded="true">
                            <p class="vfes-paragraph--large"><span class="vfes-rate-data__detail-price">54,99€/mes</span> durante los 6
                            primeros meses. Durante 12 meses.</p>
                            <button type="button" name="cta" title="CTA" class="vfes-button vfes-button--primary" data-analytics-element=""
                                data-analytics-category="cta">
                                Quiero esta tarifa
                            </button>
                            <a class="vfes-link" href="Enlace al sitio" title="Title del enlace">Enlace por defecto</a>
                        </div>
                </div>
            </Container>
        );
    }
}
export default Card;