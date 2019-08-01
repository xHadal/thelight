import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
/* Redux */
import { connect } from 'react-redux';
import switchLed from '@/redux/actions/light';
/* UI */
import ActionButton from '@/components/ui/ActionButton';
import MainWrapper from '@/components/MainWrapper'
import ContentWrapper from '@/components/ContentWrapper'


class Light extends React.PureComponent {

    constructor(props) {
        super(props);
       
    }

    render() {
        console.log('PROPS', this.props.isOn)
        //const ledStatus = this.props.isOn;
        return (
            <MainWrapper>
                <ContentWrapper >
                    <ActionButton text={this.props.isOn ? 'on': 'off'} isOn={this.props.isOn} clickFn={this.props.switchLed.bind(this,this.props.isOn)}/>
                </ContentWrapper>

                <ContentWrapper bgColor>
                    <ActionButton text={this.props.isOn ? 'on': 'off'} color={"white"} isOn={this.props.isOn} clickFn={this.props.switchLed.bind(this,this.props.isOn)} />
                </ContentWrapper>
            </MainWrapper>
        );
    }
}

const mapStateToProps = ({ light: { isOn } } = state) => {
    return { isOn }
}


export default withRouter(
    connect(mapStateToProps, { switchLed: switchLed })(Light)
);