import { Avatar, Button, IconButton } from "@mui/material";
import styled from "styled-components";
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import * as EmailValidator from "email-validator";
import {getAuth, signOut } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "@/firebase";

const auth=getAuth();

function Sidebar() {
    const [user] = useAuthState(auth);

    const handleSignOut = async()=> {
    try{
        await signOut(auth);

        console.log('user sign out');
    } catch (error){
        console.error('error saat sign out',error);
    }
};

const createChat = () => {
    const input = prompt("tolong masukkan alamat email untuk user yang kamu ingin chat dengannya"
    );

    if (!input) return null;

    if (EmailValidator.validate(input)) {
    
    addDoc(collection( db,'chats'), {
        user: [user.email, input],
    });

}
};
    return (
    <Container>
        <Header>
            <UserAvatar onClick={handleSignOut} />

            <IconsContainer>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                <MoreVertIcon />
                </IconButton>


            </IconsContainer>
        </Header>

        <Search>
            <SearchIcon />
            <SearchInput placeholder="Temukan kontak anda" />
        </Search>
        <SidebarButton onClick={createChat}>Mulai chat baru yuk</SidebarButton>    
    </Container>
    );
}

export default Sidebar;

const Container = styled.div``;
const Search = styled.div`
display: flex;
align-items:center;
padding:20px;
border-radius:2px;
`;
const SidebarButton=styled(Button)`
width:100%;

&&&{
border-top: 1px solid whitesmoke;
border-bottom: 1px solid whitesmoke}`;
const SearchInput = styled.input`
outline-width:0;
border: none;
flex:1;`;
const Header = styled.div`
display:flex;
position: sticky;
top: 0;
background-color:white;
z-index:1;
justify-content: space-between;
align-items: center;
padding:15px;
height: 80px;
border-bottom: 1px solid whitesmoke;
`;
const UserAvatar= styled(Avatar)`
cursor: pointer;

:hover{
    opacity: 0.8;
}
`;
const IconsContainer = styled.div``;