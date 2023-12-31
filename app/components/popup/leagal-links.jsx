"use client";

import { Flex, Link, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, UnorderedList, VStack } from "@chakra-ui/react";

export default function LeagalLinkPopup({ isOpen, onClose }) {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            variant="legalVariant"
            isCentered
            size="xl"
        >
            <ModalOverlay />
            <ModalContent mx={{ base: "1rem", md: "0" }}>
                <ModalHeader px="4rem" pt="3.5rem">
                    Librum-Reader Legal Information
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody px="4rem" pb="3rem">
                    <Flex direction="column">
                        The following pages provide the various legal information
                        pertaining to Librum-Reader:
                        <VStack mt="1rem" align="start">
                            <UnorderedList mt="0">
                                <ListItem>
                                    <Link href="/disclaimer">Legal Disclaimer</Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="/privacypolicy">Privacy Policy</Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="/cookies">Cookies Policy</Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="/termsofservice">Terms of Service</Link>
                                </ListItem>
                            </UnorderedList>
                        </VStack>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
