import React, { useState } from "react";
import {
  MantineProvider,
  Container,
  Text,
  createStyles,
  Group,
  UnstyledButton,
  ActionIcon,
  MediaQuery,
  Burger,
} from "@mantine/core";
import { AppShell, Navbar, Header } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

// Icons
import { ReactComponent as Logo } from "./assets/logo.svg";
import {
  IconDashboard,
  IconFile,
  IconCalendar,
  IconUser,
  IconSettings,
  IconChevronRight,
} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  navToggler: {
    position: "absolute",
    right: -10,
    top: 10,
  },
}));

function Demo() {
  const { classes } = useStyles();
  const [open, setOpen] = useState(false);
  const largeScreen = useMediaQuery("(min-width: 900px)");

  const menus = [
    { name: "Dashboard", logo: <IconDashboard /> },
    { name: "Projects", logo: <IconFile /> },
    { name: "Planner", logo: <IconCalendar /> },
    { name: "Account", logo: <IconUser /> },
    { name: "Settings", logo: <IconSettings /> },
  ];

  return (
    <AppShell
      padding="md"
      navbarOffsetBreakpoint="md"
      navbar={
        <Navbar
          hiddenBreakpoint="md"
          hidden={!open}
          width={{ base: open ? 200 : 0, md: open ? 200 : 50 }}
          height="100%"
          p="xs"
        >
          <MediaQuery smallerThan="md" styles={{ display: "none" }}>
            <div className={classes.navToggler}>
              <ActionIcon
                variant="outline"
                radius="xl"
                size={20}
                color="gray"
                onClick={() => setOpen(!open)}
              >
                <IconChevronRight />
              </ActionIcon>
            </div>
          </MediaQuery>
          <Navbar.Section mt={largeScreen ? 35 : 15}>
            {menus.map((menuItem) => (
              <UnstyledButton key={menuItem.name} mb="lg">
                <Group>
                  {menuItem.logo}
                  {open && <Text>{menuItem.name}</Text>}
                </Group>
              </UnstyledButton>
            ))}
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={70} sx p="xs">
          <Container fluid className={classes.inner}>
            <Group>
              <MediaQuery largerThan="md" styles={{ display: "none" }}>
                <Burger
                  opened={open}
                  onClick={() => setOpen((o) => !o)}
                  size="sm"
                  color="gray"
                  mr="sm"
                />
              </MediaQuery>
              <Logo />
            </Group>
          </Container>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Container>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          ultrices nisi quis nulla efficitur varius. Proin non ullamcorper
          turpis. Praesent eu ullamcorper odio. Duis quis bibendum felis, vitae
          mattis purus. Fusce iaculis, ex ac fermentum commodo, erat eros
          scelerisque dui, eget congue erat metus eget neque. Proin molestie
          rhoncus purus a pulvinar. Ut auctor justo quis massa volutpat
          molestie. Donec rutrum tellus dictum nulla hendrerit feugiat. Cras ac
          tortor a enim interdum sagittis non vel magna. Quisque in sem id
          lectus venenatis congue. Morbi nec accumsan dolor. Aliquam eros ex,
          tincidunt eget bibendum vitae, lacinia vel dolor. Donec consequat
          sagittis est. Cras at justo mauris. Ut sodales pellentesque mi nec
          condimentum. Integer sit amet lectus posuere, elementum felis ac,
          lacinia leo. Pellentesque fermentum ex nec eleifend ultrices. Donec eu
          luctus ante. Pellentesque sit amet lorem quis est finibus pellentesque
          vel a arcu. Aliquam semper neque lectus, vitae aliquam justo iaculis
          quis. Fusce malesuada mattis quam. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Praesent at elit neque. Sed pretium porttitor arcu, vitae ornare lorem
          bibendum nec. In ut vulputate mauris. Quisque arcu felis, ullamcorper
          et hendrerit eget, porttitor at tellus. Morbi ac ex neque. Sed
          faucibus nunc non elit cursus imperdiet. Praesent vehicula libero dui,
          vitae venenatis odio bibendum eget. Nulla vehicula, elit vulputate
          cursus laoreet, nulla justo elementum orci, et fermentum lorem dolor
          at quam. Quisque ullamcorper feugiat ante nec ultrices. Morbi sodales
          odio ac mauris efficitur, ut vehicula dui sagittis. Nam consectetur
          maximus arcu. Duis imperdiet dignissim risus. Fusce sit amet nisi eu
          leo tempor dictum. Fusce at lorem sed mi sodales maximus et non felis.
          Sed non ipsum hendrerit, congue ipsum id, egestas lacus. Pellentesque
          pharetra purus eget nulla dapibus, in convallis leo porta. In
          convallis, nunc aliquam imperdiet auctor, ligula magna rutrum felis, a
          fringilla orci lorem sit amet nisi. Integer volutpat risus a aliquet
          pellentesque. In volutpat velit nulla, quis lobortis erat vehicula
          laoreet. Nam euismod eros orci, eu mattis velit ultrices nec. Cras
          auctor dui congue odio venenatis laoreet. Vestibulum mauris enim,
          luctus eu semper eu, molestie quis lacus. Curabitur viverra erat est,
          non porttitor quam porttitor vitae. In egestas non leo non
          sollicitudin. Vestibulum a sem interdum, porta erat at, scelerisque
          tellus. Integer volutpat lorem libero, nec tincidunt sapien
          ullamcorper ac. Fusce sit amet mollis justo, sed eleifend erat. Cras
          est ex, fringilla condimentum nisi ut, feugiat faucibus sem. Phasellus
          et neque nec nisl hendrerit volutpat id porta libero. Sed nec egestas
          dolor, eget scelerisque metus. Suspendisse augue lectus, elementum ut
          tortor a, efficitur eleifend massa. Praesent rhoncus finibus euismod.
          In quis massa et nunc sagittis aliquam vel viverra lacus. Vestibulum
          at orci finibus, finibus ipsum eget, vulputate nisi. Vivamus bibendum
          aliquet diam ac ultricies. Aenean nec ante nec mauris facilisis
          viverra. Maecenas in erat aliquet ipsum volutpat euismod. Maecenas
          aliquet convallis mi, ut luctus eros ultrices at. Aenean consectetur
          volutpat tellus, pellentesque tincidunt mauris elementum fermentum.
          Proin vitae dui venenatis, sollicitudin orci nec, aliquam nisl. Nullam
          vel mauris metus. Nullam porttitor molestie sagittis. Pellentesque sed
          placerat arcu. Ut molestie ante ligula, sed imperdiet diam pretium
          quis. Praesent faucibus nisi et aliquam interdum. In eros arcu,
          laoreet et velit id, vestibulum sagittis mauris. In convallis turpis
          non elit iaculis, eu elementum ex placerat. Praesent fringilla dolor
          tortor, vel hendrerit nisl viverra vel. Donec sit amet imperdiet odio.
          Sed sit amet diam ultricies, suscipit sapien sed, vehicula felis.
          Vivamus id gravida urna. Pellentesque vel quam in elit rhoncus
          suscipit. Etiam faucibus purus in enim mollis, eu imperdiet ipsum
          semper. Pellentesque vulputate augue sed neque tempor tristique. Etiam
          a commodo tortor. Pellentesque sollicitudin purus ac mi hendrerit
          porttitor. Etiam auctor interdum orci, a lobortis dui tincidunt ut.
          Praesent vulputate mi vel neque auctor, quis ullamcorper turpis
          luctus. Integer diam risus, hendrerit vitae placerat sed, viverra nec
          neque. Cras suscipit tellus sit amet euismod tincidunt. Donec id nulla
          eros. Nulla placerat urna nec pulvinar malesuada. Duis eget vehicula
          orci. Nunc pharetra sed odio sed vestibulum. Duis malesuada risus
          nulla, at suscipit sapien ornare rhoncus. Maecenas euismod ex aliquam,
          pretium magna consectetur, dapibus libero. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. Fusce congue, turpis quis tincidunt
          facilisis, augue quam tincidunt dui, eget sollicitudin ligula sapien
          ac augue. In hac habitasse platea dictumst. Nullam vitae sagittis
          libero. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Sed ac cursus erat, id sagittis erat. Sed
          ullamcorper tincidunt mauris, vitae feugiat orci tincidunt quis.
          Vestibulum condimentum tempus erat ut malesuada. Suspendisse
          scelerisque auctor metus quis congue. Nullam vitae mi in lorem ornare
          dignissim quis vel risus. Nunc velit enim, vehicula in tempus
          porttitor, porttitor non nisl. Vivamus purus elit, fringilla a
          ullamcorper ac, efficitur ac nisi. Donec feugiat efficitur consequat.
          In eget fermentum sapien. Etiam nibh mauris, tristique quis interdum
          nec, volutpat vitae diam. Integer vehicula ligula nec erat ultricies
          vehicula. Etiam convallis, justo at vestibulum aliquet, augue sapien
          scelerisque purus, nec lacinia neque enim nec lectus. Nulla vestibulum
          nibh vitae magna blandit, quis laoreet neque pretium. Suspendisse ac
          elit consequat, congue augue ut, porttitor lacus. Nunc at scelerisque
          diam. Nam facilisis eleifend urna, ut malesuada tortor maximus in.
          Proin et lobortis tortor, quis posuere erat. Nunc feugiat et urna sit
          amet fermentum. Quisque ac sapien quis quam fringilla vulputate.
          Aliquam interdum lacus ut molestie elementum. Aliquam erat volutpat.
          Fusce suscipit neque et metus ultricies dignissim. Suspendisse in
          pellentesque nulla. Ut pulvinar vehicula varius. Vestibulum sed eros
          volutpat, lobortis lacus vel, accumsan justo. Nullam egestas pharetra
          tellus quis fringilla. Cras facilisis sollicitudin nunc vitae mollis.
          Morbi vestibulum vel enim id mattis. In sodales gravida odio, non
          hendrerit tellus condimentum nec. Proin scelerisque sagittis arcu non
          feugiat. Praesent condimentum turpis massa, ornare aliquam velit
          euismod ut. Nulla vulputate, quam nec sollicitudin interdum, augue
          nibh auctor tellus, et hendrerit nisl elit in nisl. In odio sapien,
          elementum at metus tincidunt, tempor hendrerit metus. Donec vel lacus
          non purus mattis malesuada. Aliquam convallis condimentum erat quis
          interdum. Sed in malesuada ante. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Morbi
          pharetra sapien ac tortor commodo iaculis. Nam sit amet scelerisque
          leo. Phasellus ut lacus tincidunt ipsum maximus faucibus vitae quis
          libero. Donec eu ipsum sit amet mauris feugiat laoreet. Integer
          convallis tristique magna, vitae tincidunt libero gravida ut. Aliquam
          non blandit justo, ut aliquam elit. Praesent dictum hendrerit nisl non
          molestie. Proin odio neque, convallis eget commodo et, tempus vel
          arcu. In interdum nisi est, vel ultrices mauris tempus id. Cras
          condimentum dui ut sem consectetur ornare. Morbi consectetur lectus
          sed tempus tincidunt. Maecenas id mauris nec diam euismod dictum at
          faucibus ex. Nullam dictum, elit eu lacinia lacinia, eros turpis
          bibendum urna, id sollicitudin turpis urna non tellus. Aenean sed urna
          at elit imperdiet commodo. Ut maximus vitae lorem at laoreet. Nam ut
          eros nisl. Donec sit amet dui mollis neque commodo sagittis in id
          nibh. Aenean dictum dolor eget leo tempus bibendum. In ultricies ante
          tristique, ultricies urna vel, interdum nunc. Donec pulvinar enim quis
          fermentum accumsan. Nulla imperdiet nibh nisi, et hendrerit orci
          porttitor in. Nullam dictum massa est, nec interdum augue dignissim
          placerat. Vivamus ultrices, odio nec luctus convallis, turpis sem
          vestibulum nibh, a iaculis enim elit nec justo. Donec faucibus turpis
          nec viverra iaculis. Vestibulum non egestas felis. Sed aliquet vitae
          nunc ac sagittis. Aliquam in consectetur nisi. Proin eget ipsum a odio
          consectetur viverra quis et ipsum. Sed in magna turpis. Proin vel eros
          finibus, egestas sem quis, porta massa. Ut finibus commodo massa,
          vitae dignissim magna luctus at. Nulla facilisi. Phasellus porta velit
          quis bibendum porta. In bibendum libero viverra viverra posuere.
          Quisque sagittis viverra lobortis. Nam vehicula imperdiet elit, sed
          scelerisque justo mollis quis. Nam ullamcorper porttitor nisi, vel
          vehicula enim porta at. Proin rutrum a leo non vestibulum. Etiam
          tincidunt ut orci vitae vestibulum. Integer et aliquam augue, non
          convallis purus. In hac habitasse platea dictumst. Donec sit amet
          sollicitudin nibh. Praesent porta magna et justo rhoncus dignissim.
          Vivamus iaculis, ligula eu ullamcorper malesuada, nisi leo bibendum
          justo, ac tempor metus sapien mattis augue. Duis semper facilisis
          metus eget tempus. Etiam finibus, mi quis varius viverra, ipsum massa
          efficitur neque, quis maximus eros metus dignissim augue. Sed quis
          justo vitae quam tempor pulvinar. Fusce nibh tellus, finibus et nisi
          sit amet, mollis bibendum purus. Aenean eros augue, venenatis non
          iaculis non, consequat vitae leo. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Nullam vehicula ac tortor vel scelerisque.
          Donec sit amet tortor elit. Donec egestas interdum leo. Nulla eleifend
          turpis vitae urna mollis blandit. Vivamus mattis dignissim commodo.
          Phasellus ac libero eget odio tempus commodo. Proin libero turpis,
          iaculis feugiat magna a, dignissim pulvinar ex. Duis vestibulum
          sollicitudin viverra. Nam eu orci tristique, gravida metus eu, euismod
          neque. Quisque pellentesque nec enim vel convallis. Pellentesque
          porttitor volutpat mauris, id efficitur metus rutrum at. Duis vel
          tellus pulvinar, auctor ipsum a, ultrices quam. Nunc dignissim sit
          amet ex ac venenatis. Integer id sapien augue. Vestibulum in mi ut
          lacus ultricies sollicitudin. Cras erat nulla, hendrerit non pretium
          vel, consequat ac risus. In auctor urna vel rhoncus dapibus. Quisque
          ullamcorper condimentum aliquet. Pellentesque urna tellus, eleifend
          non interdum quis, euismod ut metus. Aliquam nec neque vel felis
          convallis mattis. Pellentesque ut lectus sed nibh feugiat mattis.
          Vivamus dui elit, eleifend ac tellus sed, venenatis semper lorem.
          Mauris cursus blandit tortor, a hendrerit turpis. Nam dapibus nibh et
          mauris auctor tristique. Pellentesque lectus risus, suscipit nec
          ligula eget, hendrerit euismod sapien. Quisque finibus viverra nunc
          sit amet feugiat. Duis et est ut massa blandit pharetra. Nulla nisi
          quam, tempor interdum metus in, consequat vulputate lacus. Aliquam
          semper, risus non finibus pretium, mauris nunc efficitur risus, eu
          hendrerit turpis lacus ac nibh. Aenean bibendum faucibus ultrices.
          Donec congue eros purus. Pellentesque sed sagittis purus, id commodo
          quam. In leo nibh, suscipit non urna tincidunt, consectetur
          condimentum erat. In fringilla, velit quis viverra faucibus, lectus
          neque gravida leo, et vulputate neque nibh nec quam. Donec et lorem
          sollicitudin, mollis arcu sit amet, bibendum tortor. Vestibulum tellus
          nunc, elementum id nulla eget, euismod congue enim. Nam vel leo
          lectus. Proin eget interdum neque. Morbi vel hendrerit erat. Phasellus
          sodales at augue non lobortis. Fusce in velit nisi. Morbi molestie ex
          a diam tincidunt gravida. Ut velit quam, condimentum id neque nec,
          lobortis sagittis erat. Fusce congue eleifend eleifend.
      </Container>
    </AppShell>
  );
}

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Demo />
    </MantineProvider>
  );
}
