import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { carDTO } from "../../dtos/carDTO";
import { RectButton} from "react-native-gesture-handler"

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_primary};
`;
export const Heard = styled.View`
    width:100%;
    height:113px;
    justify-content: flex-end;
    padding: 32px 24px;
    background-color: ${({ theme }) => theme.colors.heard};
`;

export const HeardContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const TotalCard = styled.Text`
   font-size: ${RFValue(15)}px;
   font-family: ${({ theme }) => theme.fonts.primary_400};
   color: ${({ theme }) => theme.colors.text};
`;
export const CarList = styled(FlatList as new() => FlatList<carDTO>).attrs({
    contentContainerStyle :{
        padding: 24
    },
    showsVerticalScrollIndicator: false
})``;

export const MyCarButton = styled(RectButton)`
    width:60px;
    height:60px;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.main};

    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 13px;
    right: 23px;
`;
