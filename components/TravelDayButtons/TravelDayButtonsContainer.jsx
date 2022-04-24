import { Children, useState } from "react";
import { Box, Button, Collapse, Flex, GridItem, Icon, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import TravelDayButton from "./TravelDayButton";
import { daysOfWeek } from "../../utils/constants";

export default function TravelDayButtonsContainer({ methodIcon, title, children, description }) {

  return (
    <Box
      direction="column"
      align="space-between"
      borderWidth="2px"
      borderRadius="lg"
      px="3%"
      py="5%"
      mb="5%"
    >
      <Flex>
        <Flex
          align="flex-start"
        >
          <Icon
            justifySelf="end"
            w={7}
            h={7}
            as={methodIcon}
          />
          <Spacer />
          <Flex
            direction="column"
            align="left"
            pl="15px"
          >
            <Text
              color="#044B7F"
              fontWeight="500"
              fontSize="24px"
            >
              {title}
            </Text>
            { description }
          </Flex>
        </Flex>
        <Spacer />
      </Flex>
      <SimpleGrid
        py="10"
        columns={{ md: 4 }}
        spacingX="15px"
        spacingY="15px"
        textAlign="center"
      >
        {daysOfWeek.map((item) => (
          <GridItem key={item}>
            <TravelDayButton
              label={item}
              travelMethod={title}
              isActive={true}
              onClick={(value) => console.log(`[INFO]: clicked on ${value}`)}
              disabled={false}
            />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  )
}
