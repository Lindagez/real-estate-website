import React from 'react'
import {  
    Button,
    Stack,
} from '@mui/material'
import Title from './home1/Title'
import Paragraph from './aboutus'
import { Link } from 'react-router-dom'

const GetInTouch = () => {

    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            mx: 6,
        }}
        >
            <Title
            text={
                'Contact us to buy property'
                } 
            textAlign={'center'}
            />
          
            <Paragraph 
            text={
                ' Addis Hiwot Real Estate Development and Trading Plc is a \
                company with 17 years of experience in the real estate \
                home \
              rer.'
            }
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            />
            <Button component={Link} 
            to={'/contact'}
            variant="contained" 
            type="submit"
            size="medium"
            sx= {{ 
                fontSize: '0.9rem',
                textTransform: 'capitalize', 
                py: 2,
                px: 4,
                mt: 3, 
                mb: 2,
                borderRadius: 0,
                backgroundColor: '#14192d',
                "&:hover": {
                    backgroundColor: '#1e2a5a',
                }
            }}
            >
                see more
            </Button>
 
        </Stack>
    )
}

export default GetInTouch;