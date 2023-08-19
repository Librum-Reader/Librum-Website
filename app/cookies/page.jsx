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
} from "@chakra-ui/react";

const Cookies = (props) => {
  return (
    <Flex
      spacing={4}
      color="whitesmoke"
      align="flex-start"
      direction="column"
      px="8.5em"
      py="5em"
      mx="auto"
      maxW="1300px"
    >
      <Heading fontSize="2.5em">COOKIES POLICY</Heading>
      <Text mb="3.2em">Last Updated: July 12, 2023</Text>
      <Heading fontSize="1.5em" textColor="white">
        Interpretation and Definitions
      </Heading>
      <Heading
        fontSize="1.17em"
        ml="2.5em"
        mt="2em"
        mb=".5em"
        textColor="white"
      >
        Interpretation
      </Heading>
      <Text>
        The following circumstances establish the meanings of words whose first
        letter is capitalized. The following definitions are to be understood
        equally whether they are written in the singular or plural.
      </Text>
      <Heading
        fontSize="1.17em"
        ml="2.5em"
        mt="2em"
        mb=".5em"
        textColor="white"
      >
        Definitions
      </Heading>
      <Text>In accordance with our Cookies Policy:</Text>
      <Text>
        {`In this Cookies Policy, references to "Company" (also known as "the
				Company," "We," "Us," or "Our") are to Librum-Reader. "Cookies" refers
				to little files that a website places on your computer, mobile device,
				or any other device and which, among other things, include information
				about your browsing history on that website. The term "Application" or
				“App” refers to Librum at`}{" "}
        <Link color="purple.400">https://librumreader.com/</Link>.{" "}
        {`"You" refers
				to the person accessing or using the website, or, if applicable, the
				business or other legal entity that the person is accessing or using the
				website on their behalf.`}
      </Text>
      <Heading fontSize="1.5em" mt="2em" mb=".5em" textColor="white">
        What are cookies?
      </Heading>
      <Text>
        {`Cookies are often referred to as any type of data storage and retrieval
				system used to store and access data on a user's electronic device (such
				as a computer, mobile phone, or tablet). The term "cookies" is used in
				this context to refer to other related technologies such as local shared
				objects, flash cookies, web beacons, bugs, etc. as well as the use of
				fingerprinting techniques, which refer to methods of extracting a
				device's digital fingerprint. Websites or Applications are required to
				ask users for their consent before using cookies in order to comply with
				privacy laws and regulations like the General Data Protection Regulation
				(GDPR) in the European Union and the U.S. legislation (including CCPA)
				in the United States. These regulations are meant to safeguard people's
				personal information and privacy when they use websites and other online
				resources. When a website asks for a user's consent to use cookies, it
				shows transparency regarding the information it collects and how it uses
				it. The website also gives users control over their personal data and
				the option to decide whether or not to share it by obtaining their
				approval.`}
      </Text>
      <Heading fontSize="1.5em" mt="2em" mb=".5em" textColor="white">
        What are cookies used for?
      </Heading>
      <Text>
        Cookies can monitor user activity and gather information to enhance user
        experience or advertising. Despite the fact that it may be a useful tool
        for businesses, it may also give rise to privacy and security issues.
      </Text>
      <Text>
        We use both our own and third-party cookies for several objectives,
        including identifying you as a user, learning about your browsing
        habits, collecting statistics, customizing the way content is displayed,
        and enhancing the offerings of goods and services we present to you.
      </Text>
      <Text>
        When you open the Settings Panel, you may view the list of cookies to
        understand the exact goals of each cookie.
      </Text>
      <Heading fontSize="1.5em" mt="2em" mb=".5em" textColor="white">
        Type of Cookie
      </Heading>
      <Text>Depending on their duration, cookies may be:</Text>
      <UnorderedList styleType="lower-alpha">
        <ListItem ml="1em">
          {`Session: These cookies are made to gather and store information while
					a user is accessing a website. They are often used to store data that
					is only necessary to provide the user with the service they have
					requested at that moment (for example, a list of the things they have
					purchased), and they vanish after the session is over.`}
        </ListItem>
        <ListItem ml="1em">
          Persistent: A particular kind of cookie, lasting from a few minutes to
          several years, that allows users to access and analyze data while it
          is still being stored on the device.
        </ListItem>
      </UnorderedList>
      <Text>Depending on the purpose of the cookie:</Text>
      <UnorderedList styleType="lower-alpha">
        <ListItem ml="1em">
          Technical cookies: Cookies that allow the user to browse the web page,
          platform, or application and use the available options or services.
        </ListItem>
        <ListItem ml="1em">
          Analytical cookies: These are the cookies that enable the person in
          charge of them to monitor and examine user behavior on the websites to
          which they are linked.
        </ListItem>
        <ListItem ml="1em">
          Behavioral advertising cookies: These cookies keep track of user
          behavior data gathered from ongoing monitoring of their browser
          activities, creating a specific profile from which to display
          advertisements.
        </ListItem>
        <ListItem ml="1em">
          Preferences or personalization cookies: These are the cookies that
          enable you to remember details for service access with features that
          can set your experience apart from that of other users.
        </ListItem>
      </UnorderedList>
      <Text>Depending on the entity that manages them:</Text>
      <UnorderedList styleType="lower-alpha">
        <ListItem ml="1em">
          {`Device cookies: These are the cookies that are sent to the user's computer or other web browsers from a server or domain that the editor manages and from which the user's requested service is delivered.`}
        </ListItem>
        <ListItem ml="1em">
          {`Third-party cookies: These cookies are those sent to the user’s
					electronic device from a computer or domain that the editor does not
					manage but by another entity that handles data obtained through the
					cookies.`}
        </ListItem>
      </UnorderedList>
      <Heading fontSize="1.5em" mt="2em" mb=".5em" textColor="white">
        Your consent regarding these cookies
      </Heading>
      <Text>
        We would like to inform you that we will only place cookies on your
        computer with your permission via the access banner and settings
        selected in the Settings Panel.
      </Text>
      <Text>
        The aforementioned is accurate, except technical cookies, which are
        required for computer browsing and/or to deliver the service the user
        has requested.
      </Text>
      <Text>How to revoke the consent:</Text>

      <Text>
        By altering the options in the Settings Panel, the user can change or
        cancel their consent at any moment.
      </Text>
      <Text>
        For third-party cookies, please note that each provider manages and
        controls revocation procedures exclusively. To remove them, you can do
        so from the browser options or the system offered by the third party.
        See the links we provide to do this in the Settings Panel.
      </Text>
      <Text>
        In any case, the user has the option to remove their browsing history
        (which may include cookies) from the browser that was installed on their
        electronic device, as well as to enable, block, or delete cookies.
      </Text>
      <Text>
        For Desktop or browser App user, here are the links to view the settings
        and instructions for your browser:{" "}
      </Text>
      <UnorderedList styleType="lower-alpha">
        <ListItem ml="1em">
          For the Internet Explorer web browser, please visit this page from
          Microsoft:{" "}
          <Link color="purple.400">http://support.microsoft.com/kb/278835</Link>
        </ListItem>
        <ListItem ml="1em">
          For the Chrome web browser, please visit this page from Google:{" "}
          <Link color="purple.400">
            https://support.google.com/accounts/answer/32050
          </Link>
        </ListItem>
        <ListItem ml="1em">
          For the Safari web browser, please visit this page from Apple:{" "}
          <Link color="purple.400">
            https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
          </Link>
        </ListItem>
        <ListItem ml="1em">
          For the Firefox web browser, please visit this page from Mozilla:{" "}
          <Link color="purple.400">
            https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
          </Link>
        </ListItem>
      </UnorderedList>

      <Text>
        {`Disabling all cookies does not prevent browsing/app through the service.
				You can also disable mobile app analytics from your mobile device's
				settings screen.`}
      </Text>
      <Heading fontSize="1.5em" mt="2em" mb=".5em" textColor="white">
        Information about other tracking technologies, like web beacons:
      </Heading>
      <Text>
        {`Cookies are not the only method for identifying or tracking website
				visitors. On occasion, we might also employ other related technologies,
				such as web beacons (also known as "tracking pixels" or "clear gifs").
				These tiny graphics files contain a unique identifier that enables us to
				recognize when someone has visited our Websites or opened an email
				including them.`}
      </Text>
      <Text>
        {`This enables us to track user movement from one page of a website to another, send cookies to your computer or device, determine whether you arrived there via a third-party website, enhance the website's functionality, and assess the efficacy of email marketing campaigns. These technologies frequently rely on cookies to operate effectively. Therefore, disabling cookies will make them less functional.`}
      </Text>
      <Heading fontSize="1.5em" mt="2em" mb=".5em" textColor="white">
        Cookies and Personal data protection:
      </Heading>
      <Text>
        {`Some cookies may process personal data, such as when a user's name or
				email address is used to identify the user (for example, as a registered
				user), when an IP address is used to identify and track a user, or when
				a user is identified by a unique identifier (for example, an advertising
				ID) to distinguish and track a user. For additional information, please
				check the Privacy Policy.`}
      </Text>
      <Heading fontSize="1.5em" mt="2em" mb=".5em" textColor="white">
        Changes to the Cookies Policy:
      </Heading>
      <Text>
        This Cookies Policy may be modified at any time if new laws become
        effective or if the type of cookies being used changes. We always
        mention the updation date for our policy; therefore, please check coming
        back to check it.
      </Text>
      <Heading fontSize="1.5em" mt="2em" mb=".5em" textColor="white">
        Contact Us:
      </Heading>
      <Text>
        For more details and queries, you can contact us at{" "}
        <Link color="purple.400">help@librumreader.com</Link>
      </Text>
    </Flex>
  );
};

export default Cookies;
