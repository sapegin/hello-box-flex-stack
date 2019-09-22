import React from 'react';
import { render } from 'react-dom';
import {
	Deck,
	CoverWayfair,
	Box,
	Flex,
	Stack,
	Heading,
	Title,
	Center,
	Split,
	SplitWithHeading,
	Link,
	Image,
	Video,
	Primary,
	Secondary,
	Takeaway,
	List,
	Code,
	Frame,
	Rotate,
	Appear,
} from './blinky';
import Text from '../components/core/Text';
import Button from '../components/core/Button';
import Icon from '../components/core/Icon';
import Demo from './demo';

import meMov from './assets/me.mov';
import cssMp4 from './assets/css.mp4';
import styleguidistSvg from './assets/react-styleguidist.svg';
import ouroborosSvg from './assets/ouroboros.svg';
import dogsJpg from './assets/dogs.jpg';

import SvgFeatureDuck from '../components/app/images/SvgFeatureDuck';
import dog1Jpg from './assets/dog1.jpg';
import dog2Jpg from './assets/dog2.jpg';
import dog3Jpg from './assets/dog3.jpg';
import dog4Jpg from './assets/dog4.jpg';
import dog5Jpg from './assets/dog5.jpg';
import dog6Jpg from './assets/dog6.jpg';

const isDev = window.location.hostname === 'localhost';
const exampleUrl = isDev ? 'http://localhost:3000/' : '/demo.html';

const Slides = () => (
	<Deck>
		<CoverWayfair>
			<Heading as="h1">
				Say hello to&nbsp;Box, Flex and&nbsp;Stack: layouts
				in&nbsp;the&nbsp;component age
			</Heading>
		</CoverWayfair>

		<Split>
			<Center width="100%" height="100%" p="m">
				<div>
					<Title mt={0} mb="m">
						Artem Sapegin
					</Title>
					<Link href="https://twitter.com/iamsapegin">@iamsapegin</Link>
					<br />
					Wayfair
					<br />
					Berlin, Germany
					<Appear>
						<div aria-label="Two dogs">🐶 🐶</div>
					</Appear>
				</div>
			</Center>
			<Video
				src={meMov}
				autoPlay="autoplay"
				loop="loop"
				width="100%"
				height="100vh"
				margin="auto"
				filter="saturate(0.8) hue-rotate(2deg) contrast(0.95) brightness(1.05) sepia(0.1)"
			/>
		</Split>

		<Center>
			<Image src={styleguidistSvg} alt="React Styleguidist" mb="m" />
			<Link href="https://react-styleguidist.js.org/">
				react-styleguidist.js.org
			</Link>
		</Center>

		<Frame src={exampleUrl} />

		<Primary>
			<Heading>20 years earlier…</Heading>
		</Primary>

		<Center>
			HTML tables → global styles → BEM → atomic CSS → primitive components
		</Center>

		<SplitWithHeading>
			<Title>HTML tables</Title>
			<Code lang="html" m="l" my={0}>{`
<table width="100%">
  <tr>
    <td>
      <font face="Helvetica" size="4">
        Penguin Flipper Xs Max
      </font>
      <font face="Helvetica" color="gray">
        $1099
      </font>
    </td>
    <td align="right">
      <button>Delete</button>
    </td>
  </tr>
</table>
`}</Code>
			<Demo>
				<Box p="m" height="100vh" bg="grey.3">
					<Flex alignItems="baseline">
						<Box mr="m">
							<Box as="big" fontSize="4vmin">
								Penguin Flipper Xs Max
							</Box>{' '}
							<Box as="small" mr="s" color="secondary">
								$1099
							</Box>
						</Box>
						<Box ml="auto">
							<Button style={{ fontSize: '3vmin' }}>
								<Box>Delete</Box>
							</Button>
						</Box>
					</Flex>
				</Box>
			</Demo>
		</SplitWithHeading>

		<SplitWithHeading>
			<Title>Global styles</Title>
			<Code lang="html" m="l" my={0}>{`
<div class="clearfix">
  <div class="product">
    <big>Penguin Flipper Xs Max</big>
    <small>$1099</small>
  </div>
  <div class="actions">
    <button>Delete</button>
  </div>
</div>
`}</Code>
			<Code lang="css" m="l" my={0}>{`
.product {
  float: left;
  font-family: Helvetica;
}
.product small {
  color: gray;
  font-size: inherit;
}
.actions {
  float: right;
}
`}</Code>
		</SplitWithHeading>

		<Center>
			<Video
				src={cssMp4}
				autoPlay="autoplay"
				loop="loop"
				maxWidth="95vw"
				height="92vh"
			/>
		</Center>

		<SplitWithHeading>
			<Title>BEM</Title>
			<Code lang="html" m="l" my={0}>{`
<div class="cart-item">
  <div class="cart-item__product">
    <big class="cart-item__product-name">
      Penguin Flipper Xs Max
    </big>
    <small class="cart-item__price">
      $1099
    </small>
  </div>
  <div class="cart-item__actions">
    <button>Delete</button>
  </div>
</div>
`}</Code>
			<Code lang="css" m="l" my={0}>{`
.cart-item {
  display: flex;
  align-items: baseline;
}
.cart-item__product-name {
  font-family: Helvetica;
  font-size: 19px;
}
.cart-item__price {
  font-family: Helvetica;
  font-size: 16px;
  color: gray;
}
.cart-item__actions {
  margin-left: auto;
}
`}</Code>
		</SplitWithHeading>

		<>
			<Title>Atomic CSS</Title>

			<Code lang="html">{`
<div class="flex items-baseline">
  <div>
    <big class="font-sans text-xl">
      Penguin Flipper Xs Max
    </big>
    <small class="font-sans text-base text-gray-500">
      $1099
    </small>
  </div>
  <div class="ml-auto">
    <button>Delete</button>
  </div>
</div>
`}</Code>
		</>

		<>
			<Title>Primitive components</Title>

			<Code lang="html">{`
<Flex alignItems="baseline">
  <Box mr="m">
    <Text as="big" fontSize="l">
      Penguin Flipper Xs Max
    </Text>
    <Text as="small" mr="s" color="secondary">
      $1099
    </Text>
  </Box>
  <Box ml="auto">
    <Button>Delete</Button>
  </Box>
</Flex>
`}</Code>
		</>

		<Center>
			<Heading as="p" fontSize="m">
				<Code lang="jsx" inline>
					{'<Button onClick={handleClick}>'}
				</Code>
			</Heading>
		</Center>

		<Center>
			<Heading as="p" fontSize="m">
				<Code lang="jsx" inline>
					{'<Text fontSize="l" color="secondary">'}
				</Code>
			</Heading>
		</Center>

		{/* Source: https://de.wikipedia.org/wiki/Datei:Ouroboros-Abake.svg */}
		<Center>
			<Rotate>
				<Image src={ouroborosSvg} alt="Ouroboros" width="80vmax" />
			</Rotate>
		</Center>

		<Takeaway>
			<Heading as="p">Components are better way to write CSS</Heading>
		</Takeaway>

		<Primary>
			<Heading>Layout components</Heading>
		</Primary>

		<>
			<Title>Layout components</Title>
			<List>
				<li>Discard CSS</li>
				<li>Embrace CSS</li>
			</List>
		</>

		<Split>
			<>
				<Title>Discard CSS</Title>
				<Code lang="html" m="m">{`
<FlexContainer
  directionColumn
  wrapWrap
>
  <Heading>Penguin Bob</Heading>
  <FlexContainer justifyCenter>
    <Button>Flip</Button>
  </FlexContainer>
</FlexContainer>
`}</Code>
			</>
			<>
				<Title>Embrace CSS</Title>
				<Code lang="html" m="m">{`
<Flex
  flexDirection="column"
  flexWrap="wrap"
>
  <Heading>Penguin Bob</Heading>
  <Flex justifyContent="center">
    <Button>Flip</Button>
  </Flex>
</Flex>
`}</Code>
			</>
		</Split>

		<Takeaway>
			<Heading as="p">Reuse decades of CSS knowledge</Heading>
		</Takeaway>

		<>
			<Title>Responsiveness</Title>
			<List>
				<li>Prop per breakpoint</li>
				<li>All props are responsive</li>
			</List>
		</>

		<Split>
			<>
				<Title>Prop per breakpoint</Title>
				<Code lang="jsx" m="m">{`
<Row>
  <Col xs={12} md={6} lg={3}>
    Pizza
  </Col>
</Row>
`}</Code>
			</>
			<>
				<Title>All props are responsive</Title>
				<Code lang="jsx" m="m">{`
//           Mobile Tablet Desktop
<Flex>
  <Box
    width={[ 1,     1/2,  1/4   ]}
    p={[     's',   'm',  'l'   ]}
  >
    Pizza
  </Box>
</Flex>
`}</Code>
			</>
		</Split>

		<Takeaway>
			<Heading as="p">Learn once, use everywhere</Heading>
		</Takeaway>

		<SplitWithHeading>
			<Title>Design tokens</Title>
			<Code lang="jsx" m="m">{`
const theme = {
  colors: {
    bg: '#fff',
    text: '#222'
  },
  space: {
    xxs: '0.125rem',
    xs: '0.25rem',
    s: '0.5rem',
    m: '1rem',
    l: '2rem',
    xl: '4rem',
    xxl: '8rem',
    xxxl: '16rem',
  }
}
`}</Code>
			<Code lang="html" m="m">{`
<Box color="bg" bg="text" p="m">
  I’m a card.
</Box>
`}</Code>
		</SplitWithHeading>

		<Takeaway>
			<Heading as="p">This is styled-system</Heading>
		</Takeaway>

		<>
			<Title>
				<Link href="https://styled-system.com/">styled-system</Link>
			</Title>
			<List>
				<li>Props are camelCased CSS properties</li>
				<li>All props are responsive</li>
				<li>Easy access to design tokens</li>
				<li>Works with most CSS in JS libraries</li>
			</List>
		</>

		<Primary>
			<Heading>Box / Flex / Stack</Heading>
		</Primary>

		<Secondary>
			<Heading>Box</Heading>
		</Secondary>

		<>
			<Title>Box</Title>
			<Code lang="jsx">{`
import styled from 'styled-components';
import { space, color, border, layout, flexbox } from 'styled-system';

const Box = styled('div')(
	{
		boxSizing: 'border-box',
	},
	space,
	color,
	border,
	layout,
	flexbox
);

export default Box;
`}</Code>
		</>

		<Split>
			<Code lang="jsx" m="m">{`
<Box
  bg="bg"
  border="thin"
  borderColor="grey.4"
  borderRadius="base"
  px="m"
  py="s"
>
  I am a card!
</Box>
`}</Code>
			<Demo>
				<Box p="m" height="100vh" bg="grey.3">
					<Box
						bg="bg"
						border="thin"
						borderColor="grey.5"
						borderRadius="base"
						px="m"
						py="s"
					>
						I am a card!
					</Box>
				</Box>
			</Demo>
		</Split>

		<Secondary>
			<Heading>Flex</Heading>
		</Secondary>

		<>
			<Title>Flex</Title>
			<Code lang="jsx">{`
import styled from 'styled-components';
import Box from './Box';

const Flex = styled(Box)({
	display: 'flex',
});

export default Flex;
`}</Code>
		</>

		<Split>
			<Code lang="jsx" m="m">{`
<Flex
  justifyContent={[
    'center', 'space-between'
  ]}
  flexWrap="wrap"
>
  <Box width={[1, 'auto']} mb="m"
    <Text as="h1">
      <Link href="/">Rent-o-dog</Link>
    </Text>
  </Box>
  <nav role="navigation">Navigation</nav>
</Flex>
`}</Code>
			<Demo>
				<Box p="m" height="100vh" bg="grey.3">
					<Flex justifyContent={['center', 'space-between']} flexWrap="wrap">
						<Box width={[1, 'auto']} mb="s">
							<Text as="h1">
								<Box fontSize="m">
									<Link href="/">Rent-o-dog</Link>
								</Box>
							</Text>
						</Box>
						<Box as="nav" fontSize="m">
							Navigation
						</Box>
					</Flex>
				</Box>
			</Demo>
		</Split>

		<Secondary>
			<Heading>Stack</Heading>
		</Secondary>

		<>
			<Title>Stack</Title>
			<Code lang="jsx">{`
import styled from 'styled-components';
import Box from './Box';

const px = value => (typeof value === 'number' ? \`\${value}px\` : value);

const Stack = styled(Box)(
  { display: 'grid' },
  grid,
  system({
    minColumnWidth: {
      property: 'gridTemplateColumns',
      transform: (value, scale) =>
        value ? \`repeat(auto-fit, minmax(\${px(value)}, 1fr))\` : null
    }
  })
);
export default Stack;
`}</Code>
		</>

		<Split>
			<Code lang="jsx" m="m">{`
<Stack gridGap="m">
  <Flex
    justifyContent="center"
    color="secondary"
  >
    <Icon name="duck" width={80} />
  </Flex>
  <Heading
    as="h3" size="m" textAlign="center"
  >
    Rubberducking
  </Heading>
  <Text textAlign="center">
    Expain your problem to a dog…
  </Text>
</Stack>
`}</Code>
			<Demo>
				<Box p="m" height="100vh" bg="grey.3">
					<Stack gridGap="m">
						<Flex justifyContent="center" color="secondary">
							<SvgFeatureDuck width="10vmax" />
						</Flex>
						<Box fontSize="l" textAlign="center">
							Rubberducking
						</Box>
						<Box fontSize="m" textAlign="center">
							Expain your problem to a dog, not to a rubber duck.
						</Box>
					</Stack>
				</Box>
			</Demo>
		</Split>

		<Split>
			<Code lang="jsx" m="m">{`
<Stack
  gridGap="m"
  minColumnWidth="12vmax"
>
  <Image src="dog1.jpg" alt="" />
  <Image src="dog2.jpg" alt="" />
  <Image src="dog3.jpg" alt="" />
</Stack>
`}</Code>
			<Demo>
				<Box p="m" height="100vh" bg="grey.3">
					<Stack gridGap="m" minColumnWidth="12vmax">
						<Image src={dog1Jpg} alt="" style={{ maxWidth: '100%' }} />
						<Image src={dog2Jpg} alt="" style={{ maxWidth: '100%' }} />
						<Image src={dog3Jpg} alt="" style={{ maxWidth: '100%' }} />
						<Image src={dog4Jpg} alt="" style={{ maxWidth: '100%' }} />
						<Image src={dog5Jpg} alt="" style={{ maxWidth: '100%' }} />
						<Image src={dog6Jpg} alt="" style={{ maxWidth: '100%' }} />
					</Stack>
				</Box>
			</Demo>
		</Split>

		<Split>
			<Code lang="jsx" m="m">{`
<Box
  bg="bg"
  border="thin"
  borderColor="grey.2"
  borderRadius="base"
>
  <Image src="dog1.jpg" alt="Good girl" />
  <Stack
    p="m" flexGrow={1} gridGap="m"
    alignContent="space-between"
  >
    <Stack gridGap="xs">
      <Heading size="m">Tsiri</Heading>
      <Text variant="secondary">
        Saluki from Berlin
      </Text>
      <Rating value={14} />
    </Stack>
    <Button fullWidth>Feed Tsiri</Button>
  </Stack>
</Box>
`}</Code>
			<Demo>
				<Box p="m" height="100vh" bg="grey.3">
					<Box
						bg="bg"
						border="thin"
						borderColor="grey.3"
						borderRadius="base"
						height="100%"
					>
						<Box height="45vh">
							<Image
								src={dog4Jpg}
								alt="Good girl"
								width="100%"
								style={{ maxHeight: '100%', objectFit: 'cover' }}
							/>
						</Box>
						<Stack p="l" flexGrow={1} gridGap="m" alignContent="space-between">
							<Stack gridGap="xs">
								<Box fontSize="m" fontWeight="bold">
									Tsiri
								</Box>
								<Text variant="secondary">Saluki from Berlin</Text>
								<Stack
									justifyContent="start"
									gridAutoFlow="column"
									gridGap="xxs"
								>
									<Icon size="l" name="star" variant="rating" alt="" />
									<Icon size="l" name="star" variant="rating" alt="" />
									<Icon size="l" name="star" variant="rating" alt="" />
									<Icon size="l" name="star" variant="rating" alt="" />
									<Icon size="l" name="star" variant="rating" alt="" />
								</Stack>
							</Stack>
							<Button fullWidth>Feed Tsiri</Button>
						</Stack>
					</Box>
				</Box>
			</Demo>
		</Split>

		<Code lang="jsx" m="m" mx={0}>{`
<Stack
  gridColumnGap="m"
  gridRowGap="l"
  minColumnWidth={200}
  as="ul"
>
  {dogs.map(dog => (
    <Card key={dog.id} as="li">
      <Card.Cover>
        <Image src={\`/images/\${dog.image}\`)} alt={dog.name} />
      </Card.Cover>
      <Card.Body>
        <DogInfo dog={dog} />
      </Card.Body>
      <Card.Footer>
        <Button as={Link} fullWidth to={\`/checkout/\${dog.id}\`}>
          Rent {dog.name}
        </Button>
      </Card.Footer>
    </Card>
  ))}
</Stack>
`}</Code>

		<Frame src={exampleUrl} />

		<Frame src={exampleUrl} animate />

		<>
			<Title>Demo</Title>
			<p>
				<Link href="https://heybox.sapegin.me/demo.html">
					heybox.sapegin.me/demo.html
				</Link>
			</p>
			<p>
				<Link href="https://github.com/sapegin/hello-box-flex-stack">
					github.com/sapegin/hello-box-flex-stack
				</Link>
			</p>
			<p>
				Press <code>b</code>, <code>f</code> or <code>s</code> for x-ray.
			</p>
		</>

		<>
			<Title>Recap</Title>
			<List>
				<li>Components are the new way of writing CSS</li>
				<li>Reuse your CSS knowledge</li>
				<li>
					Box / Flex / Stack components are enough to create almost any layout
				</li>
			</List>
		</>

		<>
			<Title>Thank you and use components!</Title>
			<p>
				Slides: <Link href="https://heybox.sapegin.me/">heybox.sapegin.me</Link>
				<br /> Me: <Link href="https://sapegin.me/">sapegin.me</Link>
				<br /> Twitter:{' '}
				<Link href="https://twitter.com/iamsapegin">@iamsapegin</Link>
			</p>
			<Image src={dogsJpg} height="40vh" />
		</>
	</Deck>
);

render(<Slides />, document.getElementById('root'));
