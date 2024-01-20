import {ListItem, TabButton, TabButtonText} from './styledComponent'

const TabListItem = props => {
  const {tabDetails, isActive, onClickChange} = props
  const {id, buttonText} = tabDetails

  const textColor = `${isActive ? '#ffffff' : '#db1c48'}`
  const bgColor = `${isActive ? '#db1c48' : '#ffffff'}`

  const onClickChangeTab = () => {
    onClickChange(id)
  }

  return (
    <ListItem>
      <TabButton type="button" onClick={onClickChangeTab}>
        <TabButtonText bgColor={bgColor} color={textColor}>
          {buttonText}
        </TabButtonText>
      </TabButton>
    </ListItem>
  )
}

export default TabListItem
