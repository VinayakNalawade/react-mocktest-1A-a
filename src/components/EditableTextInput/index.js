import {Component} from 'react'

import {
  MainContainer,
  SubContainer,
  Heading,
  InputContainer,
  Input,
  Para,
  Button,
} from './styledComponents'

class EditableTextInput extends Component {
  state = {input: '', edit: true}

  changeInput = event => this.setState({input: event.target.value})

  changeEdit = () => this.setState(prev => ({edit: !prev.edit}))

  render() {
    const {input, edit} = this.state

    return (
      <MainContainer>
        <SubContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {edit ? (
              <Input value={input} onChange={this.changeInput} type="input" />
            ) : (
              <Para>{input}</Para>
            )}
            <Button type="button" onClick={this.changeEdit}>
              {edit ? 'Save' : 'Edit'}
            </Button>
          </InputContainer>
        </SubContainer>
      </MainContainer>
    )
  }
}

export default EditableTextInput
