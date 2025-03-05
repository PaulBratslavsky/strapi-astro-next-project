import { strapiClient } from "./strapi-client";

async function getCollectionType(name: string, params: object) {
  const data = await strapiClient.collection(name).find(params);
  return data;
}

async function getSingleType(name: string, params: object) {
  const data = await strapiClient.single(name).find(params);
  return data;
}

async function getGlobalPageData() {
  const data = await getSingleType("global", {
    populate: {
      banner: {
        populate: {
          link: {
            fields: ["href", "label", "isExternal"],
          },
        },
      },
      header: {
        populate: {
          logo: {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
            },
          },
          navItems: true,
          cta: true,
        },
      },
    },
  });
  const globalData = data?.data;
  if (!globalData) throw new Error("No global data found");
  return globalData;
}

async function getLandingPageData() {
  const data = await getSingleType("landing-page", {
    populate: {
      blocks: {
        on: {
          "blocks.hero": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              links: true,
            },
          },
          "blocks.heading-section": true,
          "blocks.card-grid": {
            populate: {
              card: true,
            },
          },
          "blocks.content-with-image": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              link: true,
            },
          },
          "blocks.faqs": {
            populate: {
              faq: true,
            }
          },
          "blocks.person-card": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
            },
          },
        },
      },
    },
  });
  return data;
}

export { getGlobalPageData, getLandingPageData };
