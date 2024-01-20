import {Component} from 'react'

import TabListItem from '../TabListItem'

import {
  AppContainer,
  HeadingText,
  TabList,
  ActiveImage,
} from './styledComponent'

class MultilingualGreetings extends Component {
  state = {
    activeId: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
  }

  onClickChange = id => {
    this.setState({activeId: id})
  }

  changedObject = () => {
    const {languageGreetingsList} = this.props
    const {activeId} = this.state
    const objectA = languageGreetingsList.filter(
      eachObject => eachObject.id === activeId,
    )
    return objectA
  }

  render() {
    const {languageGreetingsList} = this.props
    const {activeId} = this.state
    const activeObject = this.changedObject()

    return (
      <AppContainer>
        <HeadingText>Multilingual Greetings</HeadingText>
        <TabList>
          {languageGreetingsList.map(eachGreeting => (
            <TabListItem
              key={eachGreeting.id}
              tabDetails={eachGreeting}
              isActive={activeId === eachGreeting.id}
              onClickChange={this.onClickChange}
            />
          ))}
        </TabList>
        <ActiveImage
          src={activeObject.imageUrl}
          alt={activeObject.imageAltText}
        />
      </AppContainer>
    )
  }
}

export default MultilingualGreetings
