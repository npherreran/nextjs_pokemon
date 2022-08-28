import { SmallPokemon } from '../../interfaces/pokemon-list';
import { FC } from 'react';
import { Card, Grid, Row, Text } from '@nextui-org/react';

interface ComponentProps {
    pokemon: SmallPokemon
}


export const PokemonCard: FC<ComponentProps> = ({ pokemon }) => {
    return (
        <Grid xs={6} sm={3}>
            <Card isPressable>
                <Card.Body css={{ p: 30, backgroundColor: '#e0f7fa' }}>
                    <Card.Image
                        src={pokemon.img}
                        objectFit="contain"
                        width="100%"
                        height={150}
                        alt={pokemon.name}
                    />
                </Card.Body>
                <Card.Footer css={{ justifyItems: "flex-start", backgroundColor: '#b2ebf2' }}>
                    <Row wrap="wrap" justify="space-between" align="center">
                        <Text transform="capitalize" b css={{ color: '#006064' }}>{pokemon.name}</Text>
                        <Text css={{ color: "#00838f", fontWeight: "$semibold", fontSize: "$sm" }}>
                            # {pokemon.id}
                        </Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}
