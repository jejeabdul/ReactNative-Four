import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { 
    Card,
    CardSection,
    Input,
    Button
} from './common';


class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        console.log(email, 'EMAIL');
        this.props.loginUser({ email, password });
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <Input
                        label="email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapToStateToProps = state => {
    return{
        email: state.auth.email,
        password: state.auth.password
    };
};

export default connect(mapToStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);