import { ContactList, ContactItem, DelBtn, ContInfo } from './Info.styled'

export function Info({ contacts, onDelBtnClick }) {
    return (
        <ContactList>
            {contacts.map(({ id, name, number }) => (
                <ContactItem key={id}>
                    <ContInfo>{`${name}: ${number}`}</ContInfo>
                    <DelBtn onClick={()=>{onDelBtnClick(id)}} type="button">Delete</DelBtn>
                </ContactItem>
            ) )}
        </ContactList>
    )
}