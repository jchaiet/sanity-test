interface PageI {
  sanityPage: SanityPage
}

type SanityPage = {
  id: number;
  slug: Slug;
  title: string;
}

type Slug = {
  current: string;
}