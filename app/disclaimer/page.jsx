"use client";
import { VStack, Heading, Text, Flex, Link } from "@chakra-ui/react";

const Disclaimer = (props) => {
  return (
    <Flex
      spacing={4}
      color="whitesmoke"
      align="flex-start"
      direction="column"
      px={{ base: "0", md: "8.5em" }}
      py={{ base: "1rem", md: " 9em" }}
      mx={{ base: "1rem", md: "auto" }}
      maxW="1300px"
    >
      <Heading fontSize="2.5em" textColor="legal-title">
        DISCLAIMER
      </Heading>
      <Text mb="3.2em" textColor="legal-text">
        Last Updated: July 26, 2023
      </Text>
      <Text mb="3.2em" textColor="legal-text">
        {`Please carefully read this disclaimer before using Librum (the
        "Application" and "Website"). Your use of the Application, its website,
        and any features, content, or services made available by or through the
        Application is subject to this disclaimer.`}
      </Text>
      <Heading fontSize="1.5em" textColor="legal-text" mb=".5em">
        Purpose of Librum
      </Heading>
      <Text textColor="legal-text">
        Librum utilizes open-source software under the terms of the GNU General
        Public License version 3 (GPLv3) for certain aspects of the Application.
        The provisions of the GPLv3 license apply to the respective open-source
        components and govern their use, modification, and distribution. Please
        refer to the applicable licenses for more information.
      </Text>
      <Text mb="3.2em" textColor="legal-text">
        Librum is a platform for storing and reading e-books and other digital
        content. The main goal of the application is to provide a simple and
        straightforward way to access your library and read your books from
        multiple devices.
      </Text>
      <Heading fontSize="1.5em" textColor="legal-text" mb=".5em">
        Copyrighted Materials
      </Heading>
      <Text textColor="legal-text">
        We respect the intellectual property rights of others and expect our
        users to do the same.
      </Text>
      <Text textColor="legal-text">
        The Application does not host or provide any copyrighted materials
        without proper authorization. Users are responsible for ensuring that
        the content they download or share through the Application complies with
        applicable copyright laws.
      </Text>
      <Text mb="3.2em" textColor="legal-text">
        Whereas all the books uploaded over the Application are under the
        copyrights of the original authors and publishers. Therefore, we do not
        own any copyright for the books. We are merely a medium for users to
        read books under one platform.
      </Text>
      <Heading fontSize="1.5em" textColor="legal-text" mb=".5em">
        User Responsibilities
      </Heading>
      <Text textColor="legal-text">
        You understand and agree that your use of the Application or website and
        any content you download or distribute are your responsibility as the
        application user. You agree not to use the Application and website for
        any illegal or infringing acts as you know that the unauthorised
        distribution, replication, or sharing of copyrighted materials may
        constitute unlawful activity.
      </Text>
      <Text mb="3.2em" textColor="legal-text">
        {`It is necessary that all the content uploaded by the user should not be
        unlawful or in breach of any person’s legal rights (such as, but not
        only copyright) under any applicable law, or in any way that is
        offensive, indecent, discriminatory, or otherwise objectionable.`}
      </Text>
      <Heading fontSize="1.5em" textColor="legal-text" mb=".5em">
        Data Collection and Privacy
      </Heading>
      <Text mb="3.2em" textColor="legal-text">
        The Application may collect certain user data, such as reading
        statistics, preferences, and other usage information, to provide
        personalized experiences and improve our services. We are committed to
        protecting your privacy and handling your data in accordance with
        applicable laws and our Privacy Policy. By using the Application, you
        consent to collecting, storing, and processing your data as described in
        our Privacy Policy.
      </Text>
      <Heading fontSize="1.5em" textColor="legal-text" mb=".5em">
        Limitation of Liability
      </Heading>
      <Text mb="3.2em" textColor="legal-text">
        {`The Application and its content are provided on an "as-is" and
        "as-available" basis. We make no representations or warranties of any
        kind, express or implied, regarding the application's accuracy,
        reliability, or availability or its content. To the fullest extent
        permitted by law, we disclaim all warranties, including but not limited
        to the implied warranties of merchantability, fitness for a particular
        purpose, and non-infringement. We shall not be liable for any direct,
        indirect, incidental, consequential, or punitive damages arising out of
        or in connection with the use or inability to use the Application.`}
      </Text>
      <Heading fontSize="1.5em" textColor="legal-text" mb=".5em">
        Changes to Disclaimer
      </Heading>
      <Text mb="3.2em" textColor="legal-text">
        We reserve the right to modify, suspend, or discontinue the Application
        or any part of it, including this disclaimer, at any time without prior
        notice. Any changes to the disclaimer will be effective immediately upon
        posting the revised version on our website.
      </Text>
      <Heading fontSize="1.5em" textColor="legal-text" mb=".5em">
        Legal Advice
      </Heading>
      <Text textColor="legal-text">
        This disclaimer is not intended to provide legal advice or replace the
        need for professional legal counsel. We recommend consulting with a
        qualified attorney if you have specific questions regarding copyright,
        intellectual property, or other legal matters.
      </Text>
      <Text mb="3.2em" textColor="legal-text">
        Using the Application, you acknowledge that you have read, understood,
        and agreed to this disclaimer. If you do not agree with any part of this
        disclaimer, please refrain from using the Application.
      </Text>
      <Heading fontSize="1.5em" mb=".5em" textColor="legal-text">
        Contact Us:
      </Heading>
      <Text textColor="legal-text">
        For questions, you can reach us under:{" "}
        <Link color="purple.400">help@librumreader.com</Link>
      </Text>
      <Text textColor="legal-text">
        For business-related contact, reach out to us here:{" "}
        <Link color="purple.400">contact@librumreader.com</Link>
      </Text>
    </Flex>
  );
};

export default Disclaimer;
