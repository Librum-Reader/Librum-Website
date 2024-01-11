"use client";

import { Flex, Link, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, UnorderedList, VStack } from "@chakra-ui/react";
import { Elements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import PricingPaymentForm from "../stripe/pricing-payment-form";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function PricingPaymentPopup({ isOpen, onClose, paymentData }) {
    const [loading, setLoading] = useState(true);
    // const [clientSecret, setClientSecret] = useState();

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
                <ModalHeader p="2rem">Subscribe to {paymentData?.tier?.tierName}</ModalHeader>
                <ModalCloseButton />
                <ModalBody p="2rem">
                    {/* {!loading ? (
                        
                    ) : (
                        <Flex w="100%" h="100%" justify="center" align="center">
                            <BeatLoader color="#946BDE" />
                        </Flex>
                    )} */}
                    <Elements stripe={stripePromise}>
                        <PricingPaymentForm paymentData={paymentData} />
                    </Elements>
                </ModalBody>
            </ModalContent>
        </Modal >
    )
}
