import styled from '@emotion/styled';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';


export const ContainerItem = styled(Card)`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 10px;
    width: 100%;
    border-radius: 20px;
    `

export const ContainerImg = styled(Box)`
    display: flex;
    width: 100px;
    height: 100%;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
        object-fit: cover;
    }
    `

export const ContainerInfo = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: 0 10px;
    `
export const ContainerActions = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
