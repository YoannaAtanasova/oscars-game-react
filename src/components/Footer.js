import React from 'react'
import { CopyRights, FooterContainer, FooterContent, FooterListReferences, FooterLink, FooterPoweredByLink, FooterItem } from '../components/FooterElements';

function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterPoweredByLink href="https://www.themoviedb.org" title="Powered By TMDB" target="_newtab">
                    <img
                        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                        alt="POWERED BY tHE MOVIE DB"
                        width="152" />
                </FooterPoweredByLink>
                <FooterPoweredByLink href="https://www.statuscake.com" title="Website Uptime Monitoring">
                    <img src="https://app.statuscake.com/button/index.php?Track=ZC84x0akbQ&Days=1&Design=1" />
                </FooterPoweredByLink>
                <FooterListReferences>
                    <FooterItem>
                        <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
                        <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
                        <FooterLink to="/user-data-deletion">User Data Deletion</FooterLink>
                    </FooterItem>
                </FooterListReferences>
            </FooterContent>
            <FooterContent>
                <CopyRights>
                    © {getYear()} - Oscars Game React Application.      
                </CopyRights>      
            </FooterContent>
        </FooterContainer>
    )
}

function getYear() {
    return new Date().getFullYear();
}

export default Footer
