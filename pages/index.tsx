import { Layout } from '../components/layouts'
import { GetStaticProps, NextPage } from 'next'
import { pokeApi } from '../api';
import { PokemonListResponse } from '../interfaces';
import { SmallPokemon } from '../interfaces/pokemon-list';
import { Card, Grid, Row, Text } from '@nextui-org/react';

interface ComponentProps {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<ComponentProps> = ({ pokemons }) => {
  return (
    <Layout title="Home - Pokemon">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((item, index) => (
          <Grid xs={6} sm={3} key={index}>
            <Card isPressable>
              <Card.Body css={{ p: 30, backgroundColor: '#e0f7fa' }}>
                <Card.Image
                  src={item.img}
                  objectFit="contain"
                  width="100%"
                  height={150}
                  alt={item.name}
                />
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start", backgroundColor: '#b2ebf2' }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text transform="capitalize" b css={{ color: '#006064' }}>{item.name}</Text>
                  <Text css={{ color: "#00838f", fontWeight: "$semibold", fontSize: "$sm" }}>
                    # {item.id}
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </Layout>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  const pokemons: SmallPokemon[] = data.results.map((poke, index) => {
    const id = index + 1;
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
    return {
      'name': poke.name,
      'url': poke.url,
      'id': id,
      'img': image
    }

  })


  return {
    props: {
      pokemons
    }
  }
}

export default HomePage