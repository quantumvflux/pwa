export async function generateMetadata({
  params,
}: {
  params: { hash: string };
}) {
  const { hash } = params;

  return {
    title: `PWA hash ${hash}`,
    manifest: `/api/manifest/${hash}`,
  };
}

const page = async () => {
  return <div>ayuda</div>;
};

export default page;
