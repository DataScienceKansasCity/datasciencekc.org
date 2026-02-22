import { expect, test } from "@playwright/test";

type RedirectCase = {
  path: string;
  destination: string;
};

const redirects: RedirectCase[] = [
  {
    path: "/meetup/",
    destination: "https://www.meetup.com/data-science-kc/"
  },
  {
    path: "/slack/",
    destination:
      "https://join.slack.com/t/datasciencekc/shared_invite/zt-3dvay3kaa-1UCDhNWBK_~YMd_qLHDWuA"
  },
  {
    path: "/linkedin/",
    destination: "https://www.linkedin.com/groups/14313213/"
  }
];

for (const redirectCase of redirects) {
  test(`redirect page ${redirectCase.path} contains expected meta refresh and canonical`, async ({
    request
  }) => {
    const response = await request.get(redirectCase.path);
    expect(response.ok()).toBeTruthy();

    const html = await response.text();
    expect(html).toMatch(
      new RegExp(
        `<meta[^>]*http-equiv\\s*=\\s*["']?refresh["']?[^>]*content\\s*=\\s*["']?0;url=${redirectCase.destination.replace(
          /[.*+?^${}()|[\]\\]/g,
          "\\$&"
        )}["']?`,
        "i"
      )
    );
    expect(html).toMatch(
      new RegExp(
        `<link[^>]*rel\\s*=\\s*["']?canonical["']?[^>]*href\\s*=\\s*["']?${redirectCase.destination.replace(
          /[.*+?^${}()|[\]\\]/g,
          "\\$&"
        )}["']?`,
        "i"
      )
    );
  });
}
