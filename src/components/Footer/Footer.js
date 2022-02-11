import React from "react";
import {
  Copyrights,
  FooterContainer,
  FooterContent,
  FooterListReferences,
  FooterLink,
  FooterPoweredByLink,
  FooterPoweredByImage,
  FooterItem,
} from "./FooterElements";
import { GlobalURLs } from "../../Global";

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterPoweredByLink
          href={GlobalURLs.TMDB_URL}
          title="Powered By TMDB"
          target="_newtab"
        >
          <img
            src={GlobalURLs.TMDB_LOGO_URL}
            alt="POWERED BY THE MOVIE DB"
            width="152"
          />
        </FooterPoweredByLink>
        <FooterPoweredByLink
          href={GlobalURLs.STATUSCAKE_URL}
          title="Website Uptime Monitoring"
          target="_newtab"
        >
          <FooterPoweredByImage src={GlobalURLs.STATUSCAKE_LOGO_URL} />
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
        <Copyrights>
          Copyright © {new Date().getFullYear()} - Oscars Game React
          Application. All rights reserved.
        </Copyrights>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
