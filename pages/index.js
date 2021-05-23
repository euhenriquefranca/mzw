import React from 'react';
import {
  Heading,
  Flex,
  Stack,
  Box,
  Text,
  Divider,
  Link,
  Button
} from '@chakra-ui/core';

import Container from '../components/Container';

const VideoCard = ({ title, length, href, children, ...rest }) => (
  <Link
    href={href}
    isExternal
    borderRadius={8}
    {...rest}
    _hover={{
      textDecoration: 'none',
      transform: 'scale(1.02)'
    }}
  >
    <Flex direction={['column', 'column', 'row']}>
      <Box
        boxShadow="0px 20px 40px rgba(0, 0, 0, 0.2)"
        borderRadius={8}
        w="250px"
        h="150px"
        mr={8}
        as="img"
        objectFit="cover"
        src="/mzw.png"
      />
      <Stack>
        <Heading
          letterSpacing="tight"
          as="h3"
          size="md"
          fontWeight="medium"
          mb={0}
          mt={[4, 4, 0]}
        >
          {title}
        </Heading>
        <Text color="gray.600" mb={2} fontSize="xs">
          {length}
        </Text>
        <Text color="gray.700" mb={2} fontSize="sm" maxW="300px">
          {children}
        </Text>
      </Stack>
    </Flex>
  </Link>
);

const Index = () => (
  <Box as="main">
    <Flex justifyContent="center" flexDirection="column" bg="#FBFBFB">
      <Container>
        <Stack
          as="section"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m={['0 auto', null, '0 auto 4rem auto']}
          maxWidth="600px"
          p={8}
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="600px"
          >
            <Heading
              mt={-6}
              letterSpacing="tight"
              mb={4}
              as="h1"
              size="2xl"
              fontWeight="bold"
            >
              Método do zero
              <Box>
                ao{' '}
                <Box display="inline" backgroundColor="#33CF5A">
                  Win.
                </Box>
              </Box>
            </Heading>
            <Text color="gray.700" mb={4} fontSize="lg">
              Neste curso você aprenderá toda a teoria vinculada às opções
              binárias, bem como utilização de ferramentas e corretoras e, por
              fim, terá acesso a análises gráficas junto a estratégias.
            </Text>
            <Button
              as="a"
              href="#course-overview"
              fontWeight="bold"
              h="2.5rem"
              mr={1}
              size="md"
              bg="gray.800"
              color="white"
              _hover={{ bg: 'black' }}
            >
              Assista agora →
            </Button>
          </Flex>
        </Stack>
      </Container>
    </Flex>
    <Flex justifyContent="center" flexDirection="column">
      <Stack
        as="section"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="600px"
        mt={[4, 8, 6]}
        p={8}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="600px"
        >
          <Heading
            letterSpacing="tight"
            mb={4}
            as="h2"
            size="lg"
            fontWeight="bold"
            id="course-overview"
          >
            Visão Geral do Curso
          </Heading>

          <Stack mt={8} spacing={8}>
            <VideoCard
              title="Boas Vindas"
              length="0:28"
              href="https://www.youtube.com/embed/AxNbDmYa0_Y"
            >
              No primeiro video iremos dar as boas vindas, e explicação geral do
              que irá aprender ao decorrer do curso.
            </VideoCard>
            <VideoCard
              title="Mentalidade"
              length="0:56"
              href="https://www.youtube.com/embed/4RlJuzCdbYU"
            >
              O que vai determinar se o seu resultado vai ser positivo ou
              negativo.
            </VideoCard>
            {/* <VideoCard
              title="Como se Cadastrar na Plataforma e Realizar o Primeiro
              Depósito"
              length="09:49"
              href="#"
            >
              No terceiro video, uma explicação passo a passo como se cadastrar
              na plataforma da iq option
            </VideoCard> */}
            <VideoCard
              title="Legendas da Plataforma"
              length="4:03"
              href="https://www.youtube.com/embed/YqcrZSDNQHI"
            >
              No quarto video, explicação das palavras que são tanto ditas na
              plataforma
            </VideoCard>
            <VideoCard
              title="Como Mexer nas Configurações da Plataforma"
              length="8:52"
              href="https://www.youtube.com/embed/lZR_aM-pNpo"
            >
              No quinto video explicações como por exempo sincronizar o horário
              da iq com computador, mudar da conta de treinamento para conta
              real, ocultar o valor total dos gastos, configurar as velas, o
              tempo de operação, e afins.
            </VideoCard>
            <VideoCard
              title="Contra Tendência/Notícias"
              length="5:43"
              href="https://www.youtube.com/embed/6n8Pb0ZRbKc"
            >
              No sexto video expicação sobre tendência e notícias.
            </VideoCard>
            <VideoCard
              title="Explicação do que Significa Win, Loss e Gale"
              length="12:31"
              href="https://www.youtube.com/embed/BiPCmp-m_8g"
            >
              No sétimo video, explicação na prática de como funciona win, loss
              e gale
            </VideoCard>
            <VideoCard
              title="Como Aplicar Sinais Recebidos de Forma Manual + Gale."
              length="6:53"
              href="https://www.youtube.com/embed/vJndh_-e4qc"
            >
              No oitavo video, explicação de como aplicar de forma manual sinais
              recebidos, configurando cada detalhe para não perder ele, +
              explicação na prática de como fazer um gale.
            </VideoCard>
            {/* <VideoCard
              title="Como Configurar Robô Premiun 3.0"
              length="23:34"
              href="#"
            >
              No nonô video, explicação de como configurar cada passo do robô
              premiun
            </VideoCard> */}
            {/* <VideoCard
              title="Como Converter Sinais Recebidos e Colocar no Robô"
              length="33:12"
              href="#"
            >
              No décimo video, explicar como funciona o processo de conversão e
              colocar a lista no robô para operações
            </VideoCard> */}
            <VideoCard
              title="Gestão de Banca e Juros Compostos (Quanto devo investir?)"
              length="1:53"
              href="https://www.youtube.com/embed/fcgpkdCkYDY"
            >
              No décimo primeiro video, explicar como funciona gestão de banca,
              quanto deve investir, qual a porcentagem de cada entrada.
            </VideoCard>
            {/* <VideoCard title="Stop Win e Stop Loss" length="11:20" href="#">
              No décimo segundo video, explicar como funciona stop win e stop
              loss, mostrando o porque deve ter cada um deles, entender que nada
              funciona sem eles !
            </VideoCard> */}
            <VideoCard
              title="Finalização"
              length="0:50"
              href="https://www.youtube.com/embed/I1dJIlSgdfc"
            >
              No décimo terceiro video, fazer uma finalização levando os alunos
              à compra aos outros produtos.
            </VideoCard>
          </Stack>

          <Divider borderColor="gray.200" my={16} w="100%" />
        </Flex>
      </Stack>
    </Flex>
  </Box>
);

export default Index;
