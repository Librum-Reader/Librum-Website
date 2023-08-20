"use client";
import {
  Heading,
  Text,
  ListItem,
  OrderedList,
  VStack,
  Link,
  UnorderedList,
  Flex,
  List,
} from "@chakra-ui/react";

const TOS = (props) => {
  return (
    <Flex
      spacing={4}
      color="whitesmoke"
      align="flex-start"
      direction="column"
      px="8.5em"
      py="9em"
      mx="auto"
      maxW="1300px"
    >
      <Heading fontSize="2.5em" textColor="legal-title">
        TERMS OF SERVICE
      </Heading>
      <Text mb="3.2em" textColor="legal-text">
        Last Updated: July 12, 2023
      </Text>
      <Heading textColor="legal-text" fontSize="1.17em" ml="1.5em" mb=".5em">
        1. Introduction
      </Heading>
      <List textColor="legal-text">
        <ListItem>
          1.1 These terms and conditions shall govern the accessibility,
          uploading, storage, supply of downloadable ebooks through our website{" "}
          <Link color="purple.400">https://librumreader.com/</Link> and
          application and the use of those ebooks.
        </ListItem>
        <ListItem>
          By using our website, you agree to be bound by these terms and
          conditions.
        </ListItem>
        <ListItem>
          1.2 These terms of service shall govern the use of the website and our
          application.
        </ListItem>
        <ListItem>
          1.3 You will be asked to give your express agreement to these terms
          and conditions before you use and access our website and application.
        </ListItem>
        <ListItem>
          1.4 This document does not affect any statutory rights you may have as
          a consumer or a user.
        </ListItem>
        <ListItem>
          1.5 We may change these terms and conditions at any time without
          notice. Your continued use of our website and the application after
          any changes to these terms and conditions will constitute your
          acceptance of those changes.
        </ListItem>
      </List>
      <Heading
        textColor="legal-text"
        fontSize="1.17em"
        ml="1.5em"
        mb=".5em"
        mt="2em"
      >
        2. Interpretation
      </Heading>
      <Text textColor="legal-text">2.1 In these terms and conditions:</Text>
      <UnorderedList styleType="lower-alpha" textColor="legal-text">
        <ListItem ml="1em">
          &quot;we&quot; means Librum-Reader Company (and &quot;us&quot; and
          &quot;our&quot; should be construed accordingly);
        </ListItem>
        <ListItem ml="1em">
          &quot;you&quot; means user or prospective user under these terms and
          conditions (and "your" should be construed accordingly);
        </ListItem>
        <ListItem ml="1em">
          "ebooks" means those ebooks that are available through our services;
          and
        </ListItem>
        <ListItem ml="1em">
          &quot;your ebooks&quot; means any such ebooks that you have downloaded
          or uploaded through our website and application and in your Librum
          library (including any enhanced or upgraded version of the ebooks that
          we may make available to you from time to time).
        </ListItem>
      </UnorderedList>
      <Heading
        textColor="legal-text"
        fontSize="1.17em"
        ml="1.5em"
        mb=".5em"
        mt="2em"
      >
        3. Access process
      </Heading>
      <List textColor="legal-text">
        <ListItem>
          3.1 The access of ebooks on our website and application constitutes an
          &quot;invitation to treat&quot; rather than a contractual offer.
        </ListItem>
        <ListItem>
          3.2 No contract will come into force between you and us unless and
          until you accept and create an account and abide by these terms of
          use.
        </ListItem>
        <ListItem>
          3.3 To enter into a contract through our website to access or upload
          downloadable ebooks from us, the following steps must be taken: you
          must create an account; you must provide the data required to process
          the order: name and surname, email address, country of residence; you
          must consent to the terms of this document and our privacy policy; and
          you shall get a confirmation email of account creation.
        </ListItem>
      </List>
      <Heading
        textColor="legal-text"
        fontSize="1.17em"
        ml="1.5em"
        mb=".5em"
        mt="2em"
      >
        4. Prices
      </Heading>
      <List text-color="legal-text">
        <ListItem>
          4.1 Use of the software is free. We make use of platforms that provide
          free, non-copyrighted books, which we can offer for free through our
          application.
        </ListItem>
        <ListItem>
          4.2 However, for users who need more storage, the prices shall be
          quoted on the website and in the application with the different tiers.
          For users who pay, they enjoy a number of benefits such as premium
          features which are listed on the website and in the application as
          well.
        </ListItem>
      </List>
      <Heading
        textColor="legal-text"
        fontSize="1.17em"
        ml="1.5em"
        mb=".5em"
        mt="2em"
      >
        5. Payments
      </Heading>
      <List textColor="legal-text">
        <ListItem>
          5.1 Payments may be made by any of the permitted methods specified on
          our website from time to time.
        </ListItem>
      </List>
      <Heading
        textColor="legal-text"
        fontSize="1.17em"
        ml="1.5em"
        mb=".5em"
        mt="2em"
      >
        6. Licensing of ebooks
      </Heading>
      <List textColor="legal-text">
        <ListItem>
          6.1 The user shall upload their books in a readable and downloadable
          format such as pdf, epub or Txt.
        </ListItem>
        <ListItem>
          6.2 Subject to your access and uploading of your books and compliance
          with these terms and conditions, we grant to you a worldwide,
          non-expiring, non-exclusive, non-transferable license to make any use
          of your ebooks permitted by Section 6.3, providing that you must not
          in any circumstances make any use of your ebooks that is prohibited by
          Section 6.4.
        </ListItem>
        <ListItem>
          6.3 The &quot;permitted uses&quot; of your ebooks are:
          <UnorderedList styleType="lower-alpha" textColor="legal-text">
            <ListItem ml="1em">Uploading a copy of your ebooks;</ListItem>
            <ListItem ml="1em">
              Making, storing, and viewing copies of your ebooks on only one
              account;
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          6.4 The &quot;prohibited uses&quot; of your downloads are:
          <UnorderedList styleType="lower-alpha" textColor="legal-text">
            <ListItem ml="1em">
              the editing, modification, adaptation, or alteration of any ebook
              (or part thereof), and the creation of any derivative work
              incorporating any download which might affect the daily working of
              the website or the application (or part thereof);
            </ListItem>
            <ListItem ml="1em">
              the use of any ebook (or part thereof) in any way that is unlawful
              or in breach of any person&apos;s legal rights under any
              applicable law, or in any way that is offensive, indecent,
              discriminatory or otherwise objectionable;
            </ListItem>
            <ListItem ml="1em">
              any prohibited commercial use of any ebook (or part thereof); and
            </ListItem>
            <ListItem ml="1em">
              the circumvention or removal of, or any attempt to circumvent or
              remove, the technological measures applied to any ebook for the
              purpose of preventing unauthorized use.{" "}
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          6.5 You warrant us that you have access to the necessary computer
          systems, media systems, software, and network connections to receive
          and enjoy the benefit of our services.
        </ListItem>
        <ListItem>
          6.6 All intellectual property rights and other rights in the ebooks
          not expressly granted by these terms and conditions are hereby
          reserved.
        </ListItem>
        <ListItem>
          6.7 You must retain, and must not delete, obscure, or remove,
          copyright notices and other proprietary notices on or in any ebook.
        </ListItem>
        <ListItem>
          6.8 The rights granted to you in these terms and conditions are
          personal to you, and you must not permit any third party to exercise
          these rights.
        </ListItem>
        <ListItem>
          6.9 If you breach any provision of these terms and conditions, then
          the license set out in this Section 6 will be automatically terminated
          upon such breach.
        </ListItem>
        <ListItem>
          6.10 You may terminate the license in this Section 6 by deleting your
          account or subscription to use our software.
        </ListItem>
      </List>
      <Heading
        textColor="legal-text"
        fontSize="1.17em"
        ml="1.5em"
        mb=".5em"
        mt="2em"
      >
        7. Warranties and representations
      </Heading>
      <List textColor="legal-text">
        <ListItem>7.1 You warrant and represent to us that:</ListItem>
        <UnorderedList styleType="lower-alpha" textColor="legal-text">
          <ListItem ml="1em">
            you are legally capable to use our services;
          </ListItem>
          <ListItem ml="1em">
            you have full authority, power and capacity to agree to these terms
            and conditions; and
          </ListItem>
          <ListItem ml="1em">
            all the information that you provide to us in connection with the
            creation of your account is true, accurate, complete, current and
            non-misleading.
          </ListItem>
        </UnorderedList>
        <ListItem>7.2 We warrant to you that:</ListItem>
        <UnorderedList styleType="lower-alpha" textColor="legal-text">
          <ListItem ml="1em">
            your ebooks will be of satisfactory quality;
          </ListItem>
          <ListItem ml="1em">
            your ebooks will be reasonably fit for any purpose that you make
            known to us under these terms and conditions is made;
          </ListItem>
          <ListItem ml="1em">
            your ebooks shall be securely stored for consumption and protected
            from unwarranted access and use.
          </ListItem>
        </UnorderedList>
        <ListItem>
          7.3 All of our warranties and representations relating to ebooks are
          set out in these terms and conditions. To the maximum extent permitted
          by applicable law and subject to Section 8.1, all other warranties and
          representations are expressly excluded.
        </ListItem>
      </List>
      <Heading
        textColor="legal-text"
        fontSize="1.17em"
        ml="1.5em"
        mb=".5em"
        mt="2em"
      >
        8. Limitations and exclusions of liability{" "}
      </Heading>
      <List textColor="legal-text">
        <ListItem>8.1 Nothing in these terms and conditions will:</ListItem>
        <UnorderedList styleType="lower-alpha" textColor="legal-text">
          <ListItem ml="1em">
            limit or exclude any liability for death or personal injury
            resulting from negligence;
          </ListItem>
          <ListItem ml="1em">
            limit or exclude any liability for fraud or fraudulent
            misrepresentation;
          </ListItem>
          <ListItem ml="1em">
            limit any liabilities in any way that is not permitted under
            applicable law; or
          </ListItem>
          <ListItem ml="1em">
            exclude any liabilities that may not be excluded under applicable
            law.
          </ListItem>
        </UnorderedList>
        <ListItem>
          8.2 The limitations and exclusions of liability set out in this
          Section 9 and elsewhere in these terms and conditions:
        </ListItem>
        <UnorderedList styleType="lower-alpha" textColor="legal-text">
          <ListItem ml="1em">are subject to Section 8.1; and</ListItem>
          <ListItem ml="1em">
            govern all liabilities arising under these terms and conditions or
            relating to the subject matter of these terms and conditions,
            including liabilities arising in contract, in tort (including
            negligence) and for breach of statutory duty, except to the extent
            expressly provided otherwise in these terms and conditions.
          </ListItem>
        </UnorderedList>
        <ListItem>
          8.3 We will not be liable to you in respect of any losses arising out
          of any event or events beyond our reasonable control.
        </ListItem>
        <ListItem>
          8.4 We will not be liable to you in respect of any business losses,
          including (without limitation) loss of or damage to profits, income,
          revenue, use, production, anticipated savings, business, contracts,
          commercial opportunities or goodwill.
        </ListItem>
        <ListItem>
          8.5 We will not be liable to you in respect of any loss or corruption
          of any data, database or software.
        </ListItem>
        <ListItem>
          8.6 We will not be liable to you in respect of any special, indirect
          or consequential loss or damage.
        </ListItem>
        <ListItem>
          8.7 You accept that we have an interest in limiting the personal
          liability of our employees and, having regard to that interest, you
          acknowledge that we are a limited liability entity; you agree that you
          will not bring any claim personally against our employees in respect
          of any losses you suffer in connection with the use of our website or
          these terms and conditions (this will not, of course, limit or exclude
          the liability of the limited liability entity itself for the acts and
          omissions of our employees).
        </ListItem>
      </List>
      <Heading
        textColor="legal-text"
        fontSize="1.17em"
        ml="1.5em"
        mb=".5em"
        mt="2em"
      >
        9. Variation
      </Heading>
      <List textColor="legal-text">
        <ListItem>
          9.1 We may revise these terms and conditions from time to time by
          publishing a new version on our website.
        </ListItem>
        <ListItem>
          9.2 A revision of these terms and conditions will apply to your use of
          our website and software.
        </ListItem>
      </List>
      <Heading
        textColor="legal-text"
        fontSize="1.17em"
        ml="1.5em"
        mb=".5em"
        mt="2em"
      >
        10. Assignment
      </Heading>
      <List textColor="legal-text">
        <ListItem>
          10.1 You hereby agree that we may assign, transfer, sub-contract or
          otherwise deal with our rights and/or obligations under these terms
          and conditions – providing, if you are a consumer, that such action
          does not serve to reduce the guarantees benefiting you under these
          terms and conditions.
        </ListItem>
        <ListItem>
          10.2 You may not without our prior written consent assign, transfer,
          sub-contract or otherwise deal with any of your rights and/or
          obligations under these terms and conditions.
        </ListItem>
      </List>
      <Heading
        textColor="legal-text"
        fontSize="1.17em"
        ml="1.5em"
        mb=".5em"
        mt="2em"
      >
        11. No waivers
      </Heading>
      <List textColor="legal-text">
        <ListItem>
          11.1 No breach of any provision of a contract under these terms and
          conditions will be waived except with the express written consent of
          the party not in breach.
        </ListItem>
        <ListItem>
          11.2 No waiver of any breach of any provision under these terms and
          conditions shall be construed as a further or continuing waiver of any
          other breach of that provision or any breach of any other provision.
        </ListItem>
      </List>
      <Heading
        textColor="legal-text"
        fontSize="1.17em"
        ml="1.5em"
        mb=".5em"
        mt="2em"
      >
        12. Severability
      </Heading>
      <List textColor="legal-text">
        <ListItem>
          12.1 If a provision of these terms and conditions is determined by any
          court or other competent authority to be unlawful and/or
          unenforceable, the other provisions will continue in effect.
        </ListItem>
        <ListItem>
          12.2 If any unlawful and/or unenforceable provision of these terms and
          conditions would be lawful or enforceable if part of it were deleted,
          that part will be deemed to be deleted, and the rest of the provision
          will continue in effect.
        </ListItem>
      </List>
      <Heading
        textColor="legal-text"
        fontSize="1.17em"
        ml="1.5em"
        mb=".5em"
        mt="2em"
      >
        13. Third party rights
      </Heading>
      <List textColor="legal-text">
        <ListItem>
          13.1 These terms and conditions are to our benefit and your benefit
          and are not intended to benefit or be enforceable by any third party.
        </ListItem>
        <ListItem>
          13.2 The exercise of the parties&apos; rights under these terms and
          conditions is not subject to the consent of any third party.
        </ListItem>
      </List>
      <Heading
        textColor="legal-text"
        fontSize="1.17em"
        ml="1.5em"
        mb=".5em"
        mt="2em"
      >
        14. Entire agreement
      </Heading>
      <List textColor="legal-text">
        <ListItem>
          14.1 These terms and conditions shall constitute the entire agreement
          between you and us in relation to the use and access of our website
          and shall supersede all previous agreements between you and us.
        </ListItem>
      </List>
      <Heading
        textColor="legal-text"
        fontSize="1.17em"
        ml="1.5em"
        mb=".5em"
        mt="2em"
      >
        15. Law and jurisdiction
      </Heading>
      <List textColor="legal-text">
        <ListItem>
          15.1 These terms and conditions shall be governed by and construed in
          accordance with the laws of Germany.
        </ListItem>
        <ListItem>
          15.2 Any disputes relating to these terms and conditions shall be
          subject to the non-exclusive jurisdiction of the courts of Germany.
        </ListItem>
      </List>
      <Heading
        textColor="legal-text"
        fontSize="1.17em"
        ml="1.5em"
        mb=".5em"
        mt="2em"
      >
        16. Statutory and regulatory disclosures{" "}
      </Heading>
      <List textColor="legal-text">
        <ListItem>
          16.1 We will not file a copy of these terms and conditions
          specifically in relation to each user or customer and, if we update
          these terms and conditions, the version to which you originally agreed
          will no longer be available on our website. We recommend that you
          consider saving a copy of these terms and conditions for future
          reference.
        </ListItem>
        <ListItem>
          16.2 These terms and conditions are available in the English language
          only.
        </ListItem>
        <ListItem>
          16.3 The website of the European Union&apos;s online dispute
          resolution platform is available at{" "}
          <Link
            href="https://webgate.ec.europa.eu/odr/main"
            textColor="#946BDE"
          >
            https://webgate.ec.europa.eu/odr/main
          </Link>
          . The online dispute resolution platform may be used for resolving
          disputes.
        </ListItem>
      </List>
      <Heading
        textColor="legal-text"
        fontSize="1.17em"
        ml="1.5em"
        mb=".5em"
        mt="2em"
      >
        17. Disclaimer
      </Heading>
      <List textColor="legal-text">
        <ListItem>
          The ebooks on our website and application are provided on an &quot;as
          is&quot; basis. We make no warranties or representations about the
          accuracy or completeness of the information contained in theebooks.
        </ListItem>
      </List>
      <Heading
        textColor="legal-text"
        fontSize="1.17em"
        ml="1.5em"
        mb=".5em"
        mt="2em"
      >
        18. Our details
      </Heading>
      <List textColor="legal-text">
        <ListItem>
          18.1 This website is owned and operated by the Librum-Reader company.
        </ListItem>
        <ListItem>
          18.2 Our registered office is at Kirchenkamp 2, 50226, Frechen in
          Germany.
        </ListItem>
        <ListItem>18.3 You can contact us:</ListItem>
        <UnorderedList styleType="lower-alpha" textColor="legal-text">
          <ListItem ml="1em">
            by post, using the postal address given above;
          </ListItem>
          <ListItem ml="1em">using our website contact form;</ListItem>
          <ListItem ml="1em">
            by email, using the email address published on our website from time
            to time -
            <Link href="mailto:contact@librumreader.com" textColor="#946BDE">
              {" "}
              contact@librumreader.com.
            </Link>
          </ListItem>
        </UnorderedList>
        <ListItem>Effective Date: 06.07.2023</ListItem>
      </List>
    </Flex>
  );
};

export default TOS;
