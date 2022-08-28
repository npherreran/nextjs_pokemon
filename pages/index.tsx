import { Layout } from '../components/layouts'
import { GetStaticProps, NextPage } from 'next'
import { pokeApi } from '../api';
import { PokemonListResponse } from '../interfaces';
import { SmallPokemon } from '../interfaces/pokemon-list';
import { Grid } from '@nextui-org/react';
import { PokemonCard } from '../components/pokemon/PokemonCard';

interface ComponentProps {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<ComponentProps> = ({ pokemons }) => {
  return (
    <Layout title="Home - Pokemon">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((item) => (
          <PokemonCard key={item.id} pokemon={item} />
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