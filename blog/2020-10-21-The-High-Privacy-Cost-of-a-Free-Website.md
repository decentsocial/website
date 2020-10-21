---
title: "The High Privacy Cost of a “Free” Website"
date: 2020-10-20
layout: post.njk
tags:
  - post
  - featured
  - privacy
  - free
canonicalUrl: https://themarkup.org/blacklight/2020/09/22/blacklight-tracking-advertisers-digital-privacy-sensitive-websites
---

<!--
Creative Commons Attribution-NonCommercial-NoDerivatives
https://creativecommons.org/licenses/by-nc-nd/4.0/
-->
<h1>The High Privacy Cost of a “Free” Website</h1>

<h2>Trackers piggybacking on website tools leave some site operators in the dark about who is watching or what marketers do with the data </h2>

<p>By: Aaron Sankin and Surya Mattu </p>

<p><a href="https://themarkup.org/blacklight/2020/09/22/blacklight-tracking-advertisers-digital-privacy-sensitive-websites"><img src="https://mrkp-static-production.themarkup.org/static/img/republish-logo.png" alt="Originally published on themarkup.org" /></a></p>

<p>Kara Zajac said SPART*A, a small nonprofit serving transgender military service members and veterans, helped her begin her transition while in the Navy. To give back, she volunteered to build the group’s website in her spare time after leaving the military—and kept her eye on a key value: privacy.</p>

<p>“I don't track users,” Zajac said. “Not everyone in the military is wanting to be known for being trans. They might not be out yet. So any time we can protect privacy in that way, we try to do it.”</p>

<p>She said she only allowed three trackers on spartapride.org: <a href="https://www.eff.org/wp/behind-the-one-way-mirror#Cookies">cookies</a> from Twitter and Facebook that accompany their “like” buttons on the site, and one from Disqus, a commenting platform she got through a prepackaged <a href="https://themeforest.net/item/daily-news-magazine-and-blog-ghost-theme/12849846">website theme</a> she bought off the internet for $59 to build the site.</p>

<p>But when The Markup scanned spartapride.org using our new instant privacy inspector, <a href="https://themarkup.org/blacklight/" target="_blank" rel="noreferrer noopener">Blacklight</a>, we found 21 different ad-tech companies tracked visitors to the site, sending possible signals about people’s gender identities to advertisers—without the users’ knowledge or consent.</p>

<p>Among them were the marketing and advertising arms of Google, Amazon, and Oracle’s BlueKai consumer data division, which reported a massive data exposure this summer, <a href="https://techcrunch.com/2020/06/19/oracle-bluekai-web-tracking/">leaving billions of records</a>—including personally identifiable information—accessible to the open internet without a password. Oracle did not respond to questions about whether data gathered from spartapride.org’s users was included in the exposure.</p>

<p>The trackers loaded because Disqus sells ads on the free version of its commenting portal, and that ad space comes with third-party tracking. Disqus <a href="https://disqus.com/data-sharing-settings/">discloses</a> those trackers on its own website, but the company wouldn’t comment about tracking SPART*A’s users.</p>

<p>Zajac was floored when The Markup showed her how many trackers appeared on the site. She said she learned a hard lesson: “If it's free, that doesn't mean it's free. It just means it doesn't cost money.” Instead, it costs your website visitors’ privacy.&nbsp;&nbsp;</p>

<p>An array of free website-building tools, many offered by ad-tech and ad-funded companies, has led to a dizzying number of trackers loading on users’ browsers, even when they visit sites where privacy would seem paramount, an investigation by The Markup has found. Some load without the website operators’ explicit knowledge—or disclosure to users.</p>

<p>Website operators may agree to set cookies—small strings of text that identify you—from one outside company. But they are not always aware that the code setting those cookies can also load dozens of other trackers along with them, like nesting dolls, each collecting user data.</p>

<p>To investigate the pervasiveness of online tracking, The Markup spent 18 months building a one-of-a-kind free public tool that can be used to inspect websites for potential privacy violations in real time. Blacklight reveals the trackers loading on any site—including methods created to thwart privacy-protection tools or watch your every scroll and click.</p>

<p>We scanned more than 80,000 of the world’s most popular websites with Blacklight and found more than 5,000 were “fingerprinting” users, identifying them even if they block third-party cookies. </p>

<p>We also found more than 12,000 websites loaded scripts that watch and record all user interactions on a page—including scrolls and mouse movements. It's called "session recording" and we found a higher prevalence of it than researchers had documented before.</p>

<p>More than 200 popular websites used a particularly invasive technique that captures personal information people enter on forms—like names, phone numbers, and passwords—before they hit send. It's called "key logging" and it's sometimes done as part of session recording.</p>

<p>One of the websites doing this, SunTrust Bank, <a href="https://github.com/the-markup/investigation-blacklight-the-high-cost-of-free/blob/master/data/story-inspections/www.suntrust.com/raw/inspection.json#L1100">sent the user name and password</a> we entered to a third party, Jornaya, which says it encrypts and discards the data it collects. SunTrust spokesman Kyle Tarrance wouldn't answer questions about the password leak, but insisted that the company keeps "clients’ well-being at the forefront of everything we do." After we contacted the company, its website stopped sending data to Jornaya.</p>

<p>We scanned hundreds of sensitive sites using Blacklight and found that, even there, tracking was surprisingly common:</p>

<ul><li>More than 100 websites serving undocumented immigrants, domestic and sexual abuse survivors, sex workers, and LGBTQ people sent data about their visitors to advertising companies.</li><li>Eighty U.S. abortion providers loaded third-party trackers on user browsers, some of them sending data to Facebook that ended up in user profiles.</li><li>Trackers from different companies were communicating with each other to confirm the identity of visitors to a website for victims of sexual violence.</li><li>Health information websites like Everyday Health and WebMD sent user data about page visits to dozens of marketing companies.</li><li>The Arizona Department of Child Safety’s page on how to report child abuse sent data about site visitors to six ad tech companies.</li><li>Various government websites providing information about COVID-19 sent information about the site visitors to advertising companies without users’ knowledge.</li><li>The Mayo Clinic used key logging to capture information about people’s current medical ailments in pages where they sign up for appointments and clinical trials. Even if people changed their minds and decided not to submit the information, the captured data was still sent to an endpoint on the Mayo Clinic’s server labeled “web forms for marketers/tracking.”&nbsp;&nbsp;&nbsp;</li></ul>

<p>Some of the operators of sensitive sites told The Markup they knew about the tracking, but others said they were unaware of the number of trackers and their pervasiveness—or what happens with the data collected from their users. Most, including The Mayo Clinic, WebMD, and Everyday Health, did not respond to requests for comment.</p>

<p>Some sites’ privacy policies did not disclose the tracking. For instance, the Mayo Clinic did not disclose it was using invasive key logging. And the Arizona Department of Child Safety’s <a href="https://web.archive.org/web/20200301232114/https:/dcs.az.gov/">privacy policy</a> <a href="https://az.gov/policy/privacy">said</a> that it doesn’t load cookies to track users—but we found that it did. After we asked about it, the agency added a new link to a <a href="https://dcs.az.gov/website-privacy-statement">“privacy statement”</a> disclosing the cookies.</p>

<p>The use of cookies by websites is well known, and most Americans <a href="https://www.pewresearch.org/internet/2019/10/09/americans-and-digital-knowledge/">understand how they work</a>. But even some website operators don’t always know how they get there: often from free plug-ins like comments sections, social media sharing buttons, and tools that embed posts from social media—conveniences people have come to expect on the internet but that small website operators don’t have the resources to build themselves.</p>

<p>Marketing and advertising companies are happy to provide these tools for free in exchange for user data, which is used to construct ever-more-refined profiles of internet users.</p>

<p>In other words, website operators are often effectively as blind to exactly what information advertising companies and marketers are collecting from their website visitors—and what they’re doing with the data—as the people browsing the internet are.</p>

<p>“I don’t want to say that the majority of websites don’t fully understand the data they’re collecting, but a large percentage do not,” said Michael Williams, a partner at Clym, a business that brings companies into compliance with online privacy laws like the European Union’s <a href="https://gdpr.eu/what-is-gdpr/">General Data Protection Regulation</a> and the California <a href="https://oag.ca.gov/privacy/ccpa">Consumer Privacy Act</a>.</p>

<p>He said when his firm scans websites, it often finds trackers the website operators did not know existed.</p>

<p>U.K.-based Privacy International <a href="https://privacyinternational.org/sites/default/files/2019-09/Your%20mental%20health%20for%20sale%20-%20Privacy%20International.pdf">found</a> last year that some European mental health websites didn’t always know about the plethora of advertising-related tracking technologies that loaded from their sites onto users’ browsers.</p>

<p>“A lot of the small websites, they just want a website,” said Eliot Bendinelli, a technologist with the group. “They’re just setting up stuff so that people can access information. It might be an intern doing the website or it might be someone who is not aware of all these tracking impressions.”</p>

<p>But even savvy website operators like Zajac, who is studying cybersecurity at George Washington University, can get stung by what they think is a simple add-on, especially when it comes packaged in a suite of products and can be loaded with a few simple clicks.</p>

<p>“It turns it on and you're like, ‘cool, that worked’ ” she said. “But you don't realize the implications—of now there being 30 trackers on your website.”</p>

<p>She said whatever data the trackers on Sparta Pride were collecting, the nonprofit was never privy to it. After The Markup showed her the list of trackers that were loading with it, she removed Disqus from the site.</p>

<p>Niveen Saleh, a public relations agent hired by Zeta Global, Disqus’s parent company, said Disqus offers a version without ads or their related trackers to small nonprofits for free. But nowhere on Disqus’s website does it explain how to get it, and neither did Saleh.&nbsp;</p>

<p>“We do ensure that our publishers have the option to choose to have their data collected,” Saleh said.</p>

<p>Some small website operators say they don’t have much of a choice in the matter. Most of the tools available to build a robust, functional website on the internet have user tracking built into their very functionality. Even giving users the ability to search inside a website comes with strings attached.</p>

<p>“Google Search is a great tool that can be incorporated into a website, but then all searches as conducted by site visitors can be tracked to IP address,” said Fire Erowid of Erowid, the long-running nonprofit psychoactive drug information site. She said her team ended up building a “far worse” search function for the site to protect user privacy.</p>

<p>Google Analytics trackers loaded on 69 percent of 80,000 popular websites scanned with Blacklight. Google Analytics gives website operators insight into how many people visit a website and which pages. The catch: Google, the <a href="https://www.emarketer.com/content/global-digital-ad-spending-2019">world’s largest digital ad seller</a>, also gets the data. The company’s <a href="https://policies.google.com/technologies/types?hl=en&amp;gl=BE">cookie policy</a> allows it to connect that data to the advertising profiles it already has on people, but Google spokesperson Elijah Lawal said it doesn’t do it as a policy unless the website operators agree.</p>

<p>However, in order for website operators to get information from Google Analytics about the demographics of their visitors, they have to allow data collection by Google’s advertising arm, DoubleClick, which adds the information to user profiles.</p>

<p>The second most common tracker we found on popular sites: Facebook. Blacklight found its pixel on a third of popular sites we scanned. Facebook’s trackers can follow you even if you’re not logged in to Facebook and link your browsing history to your profile for ad targeting. Website operators include the pixel to measure clicks from their ads on Facebook’s platforms.</p>

<p>One feature commonly available for “free” to website operators shows how an avalanche of trackers can end up on users’ browsers: the suite of social media share buttons offered by AddThis, which was acquired by Oracle in 2016. It allows visitors to websites that load the tool to easily share the page they’re visiting on their own social media feeds and lets site operators track those shares. The company brags on its website that more than 15 million websites have used its free tools and that it <a href="https://www.addthis.com/about/">reaches</a> “96% of the U.S. web.”</p>

<p>But AddThis isn’t a social media company. It’s a marketing company. The purpose of that free tool is to load cookies and tracking pixels on website visitors’ browsers, sending the data to Oracle’s advertising divisions and <a href="https://www.addthis.com/privacy/pixel-partners/">dozens</a> of marketing and advertising companies for ad targeting. These load instantly, whether or not the user clicks on the share button. <a href="https://fliphtml5.com/atnl/kjmi/basic">In marketing materials</a>, AddThis says it collects “up to 30 data points per page view” from each website visitor.</p>

<p>AddThis’s <a href="https://www.oracle.com/legal/privacy/addthis-privacy-policy.html#section4">privacy policy</a> discloses that the trackers&nbsp;“facilitate online behavioral advertising across the online advertising ecosystem.”</p>

<p>After the European Union implemented <a href="https://gdpr.eu/what-is-gdpr/">its 2018 law</a> requiring informed consent from website visitors before their data can be collected, AddThis said it couldn’t meet that standard and <a href="https://www.adexchanger.com/privacy/oracle-data-cloud-kills-off-its-addthis-audience-business-in-europe/#:~:text=">shuttered</a> its audience data business in Europe. AddThis also settled a class action lawsuit in California in 2011 that alleged it was inserting tracking cookies on sites without notifying users. The company agreed to pay a monetary settlement but did not acknowledge wrongdoing.</p>

<p>Using Blacklight, The Markup found AddThis trackers on more than 4,000 popular websites and four states’ coronavirus information pages: Arkansas, California, Louisiana, and Minnesota. None of the states disclosed it in their privacy policies.</p>

<p>Officials from California and Minnesota did not answer questions about what data the trackers were collecting and for what purpose.</p>

<p>Arkansas and Louisiana officials said they used AddThis social share buttons for user convenience. Louisiana’s spokesperson said they were unaware of the additional trackers on the site before The Markup brought it to their attention. Both removed the code after The Markup contacted them for comment.</p>

<p>“Ad trackers like this are not necessary for fulfilling our mission,"&nbsp;said Gavin Lesnick, a spokesperson for the <a href="https://www.healthy.arkansas.gov/programs-services/topics/novel-coronavirus">Arkansas Department of Health</a>, when we asked whether sharing visitor data with marketing companies was appropriate.</p>

<p>AddThis’s button wasn't visible on that site when Blacklight scanned it, and Lesnick said it was part of an expired campaign, but the code containing the trackers had remained as a relic. We found it was still sending data to advertising companies until we contacted him.</p>

<p>The Markup also found AddThis’s trackers on websites for nonprofit groups that would have reason to protect user privacy: those that provide resources to undocumented immigrants, domestic violence survivors, and the LGBTQ community. They all had social share buttons on their sites.</p>

<p>Chad Sniffen of The National Sexual Violence Resource Center said he had no idea his site was loading trackers from AddThis until he was contacted by The Markup.</p>

<p>Sniffen told The Markup that he was only aware of loading a single tracker, from Google Analytics, which he uses to see what content is popular in order to serve people better.</p>

<p>It turns out that the developer hired to build the center’s <a href="https://www.nsvrc.org/">website</a> incorporated AddThis’s social sharing tool, and Sniffen was unaware of the implications. As a result, his site was loading trackers from 10 online advertising companies without his knowledge.</p>

<p>One of the trackers loaded on the site by AddThis communicates with ad trackers loaded by Google’s advertising arm, a data triangulation that advertising and marketing companies sometimes use to confirm the identity of visitors to a site.</p>

<p>Oracle did not respond to emails asking how it handles data collected through AddThis from sites serving privacy-sensitive populations, like victims of sexual violence.</p>

<p>Lawal, the Google spokesperson, said in a written statement that “Google Ads does not build advertising profiles based on sensitive categories, and we have strict policies preventing customers from using such data to target ads.” <a href="https://support.google.com/adspolicy/answer/143465?hl=en">Those categories</a> include “personal hardships” and “identity and beliefs.”</p>

<p>Sniffen initially worried that disentangling AddThis from his group’s website would take resources away from its goal of funding crucial programs, like training counselors. However, he said he found himself with time on his hands during the pandemic and learned how to strip it out himself.</p>

<p>Frederik Zuiderveen Borgesius, a professor at Radboud University in the Netherlands who has written extensively on online privacy, said the pervasiveness of tracking could wreck one of the foundations of the internet: easy access to information, particularly for those who may have no other way to get it.</p>

<p>“Let's say you're a Muslim in India, or a Palestinian in Israel, or a homosexual in Poland,” he said. “At some point, you just feel uncomfortable looking for information about your own religion or own sexual preferences. Or you might be too uneasy about looking for information about sexually transmitted diseases because you fear that your behavior is monitored.</p>

<p>Many advertisers and marketers say their profiles of internet users in most cases aren’t connected to names or other “personally identifiable information” such as mailing addresses, but that doesn’t mean they don’t know who you are.&nbsp;</p>

<p>“It doesn't really matter if they know your name or not,” Borgesius said. “There are hundreds of thousands of people sharing the same name, so unique identifiers from a cookie are better identifiers.”</p>

<p>Academic research has <a href="https://themarkup.org/ask-the-markup/2020/03/24/when-is-anonymous-not-really-anonymous">repeatedly shown</a> that connecting supposedly anonymous marketing data to a name can be done with relative ease.</p>

<p>The operators of some sensitive sites said they knew their sites load marketing trackers—and they’ve made peace with the trade-off.</p>

<p>Domesticshelters.org connects domestic violence survivors with short-term shelters, and it allows Facebook and AddThis trackers on the site because the social sharing tools help raise awareness, said Chris McMurry, a member of the group’s board of directors.</p>

<p>“It’s not good enough to have a website,” he said. “We have to invest in making sure that what’s on our website is seen by those who need it the most.”</p>

<p>The site also sells ad space on its site, which comes with its own trackers, but the revenue helps him provide vital services. When we scanned Domesticshelters.org with Blacklight, we found trackers from 10 companies.</p>

<p>The Markup’s findings underscore how the web’s foundational profit source, the online advertising industry, is trying to make money from every interaction on the internet—not just the obvious clicks, like visiting retailers.</p>

<p>Data collected from your detailed web browsing habits—what specific pages you visited, for how long, what you did there—can be tied to records of products and services you purchased both online and offline and tied to your identity through things like store consumer loyalty cards. This can then be linked to information collected from an app you downloaded on your smartphone or which movie or show you streamed last night. The profiles are filled with data about each visitor, including presumed interests and geographic location.</p>

<p>Companies claim this data allows them to make predictions about who is ready and able to buy certain products and provide those insights to sellers.</p>

<p>The ad-targeting categories offered by marketing companies can be surprising. The <a href="https://support.aerserv.com/hc/en-us/articles/207148516-List-of-IAB-Categories">list</a> produced by the Interactive Advertising Bureau, a prominent online ad industry trade group, has included things like “Incest/Abuse Support,” “Substance Abuse,” and “AIDS/HIV.”&nbsp;&nbsp; After this was <a href="https://www.irishtimes.com/business/technology/new-documents-back-complaints-about-online-advertising-1.3772427">reported publicly</a>, the group removed the first category, but the others remain.</p>

<p>Many sites don’t load just one or two trackers—they load dozens of them because of a process called real-time bidding, which allows ads on a site to be personalized to whoever visits it.</p>

<p>When a user visits a page offering real-time ads, advertisers compete with each other for the ad space—in some cases tying users to those data-heavy profiles—in the blink of an eye. Regardless of who wins the auction to show the ad, all bidders are told who visited the site.</p>

<p>The global real-time bidding industry was valued at $5.79 billion in 2018 and is expected to <a href="https://www.businesswire.com/news/home/20190920005365/en/Real-Time-Bidding-Market-Report-2019-Global-Market">swell</a> to $28.69 billion by 2024.</p>

<p>“Americans never agreed to be tracked and have their sensitive information sold to anyone with a checkbook,” a group of federal lawmakers wrote in a <a href="https://www.wyden.senate.gov/imo/media/doc/073120%20Wyden%20Cassidy%20Led%20FTC%20Investigation%20letter.pdf">letter</a> about real-time bidding to the Federal Trade Commission in July. “This outrageous privacy violation must be stopped and companies that are trafficking in Americans’ illicitly obtained private data should be shut down.”</p>

<p>They asked the agency to open an inquiry. FTC officials declined to say whether they have.</p>

<p>Websites serving people in Europe have had to get their affirmative consent before tracking users since 2018, when the European Union’s privacy law went into effect. Ironically, a <a href="https://arxiv.org/pdf/1909.02638.pdf">2019 study</a> looking at those consent notifications found they are largely structured to encourage users to agree to tracking they otherwise wouldn’t readily allow and that they offer “no meaningful choice to consumers.”</p>

<p>The California Consumer Privacy Act <a href="https://www.oag.ca.gov/system/files/attachments/press_releases/CCPA%20Fact%20Sheet%20%2800000002%29.pdf">requires</a> large, for-profit companies doing business in the state to disclose the information its website collects, allow users to opt out of collection, and delete users’ data upon request.</p>

<p>The only federal law specifically requiring websites in the U.S. to disclose user tracking <a href="https://www.ftc.gov/tips-advice/business-center/guidance/complying-coppa-frequently-asked-questions-0">applies only to websites serving children</a>, but the Federal Trade Commission has <a href="https://www.ftc.gov/news-events/press-releases/2012/08/google-will-pay-225-million-settle-ftc-charges-it-misrepresented">gone after companies</a> for “deceptive” practices for claiming that they don’t track users when in fact they do.</p>

<p>The Markup found even some government websites don’t disclose tracking, including the <a href="https://www.usmint.gov">U.S. Mint</a> and the <a href="https://www.sba.gov">Small Business Administration</a>, which we found using a technique called canvas fingerprinting, which can track people who block cookies.</p>

<p>The SBA did not respond to our requests for comment. The Mint’s website has stopped using canvas fingerprinting since we reached out to the agency in late July. Mint spokesperson Michael White insisted in an email that it never used the technique, but <a href="https://github.com/the-markup/investigation-blacklight-the-high-cost-of-free/blob/master/data/story-inspections/usmint.gov/inspection.json#L208">we have preserved the code that shows it was</a>.</p>

<p>As for the ad industry’s solutions to online privacy concerns, they have largely centered on allowing people to either opt out of tracking or opt out of being served targeted ads related to that tracking. <a href="https://www.howtogeek.com/285835/how-to-opt-out-of-personalized-ads-from-google/">Google</a>, <a href="https://datacloudoptout.oracle.com/#optout">Oracle</a>, <a href="https://www.digitaltrends.com/social-media/how-to-opt-out-of-targeted-ads-on-facebook/#:~:text=On%20the%20app%2C%20go%20to%20Setting%20%26%20Privacy%20%3E%20Settings%20%3E,to%20target%20you%20with%20ads.">Facebook</a>, and online advertising industry groups on <a href="https://optout.networkadvertising.org/?c=1">both</a> <a href="https://www.youronlinechoices.com/">sides</a> of the Atlantic offer some version of those options.</p>

<p>To exercise them, people have to ask each online advertising and marketing company individually and install a cookie on their devices reminding the company in question not to track them in the future. &nbsp;For some opt outs, the companies require requestors to provide their full name, email, and physical address.</p>

<p>Facebook, for instance, continues to collect data on those who have opted out, spokesperson Alex Dziedzan confirmed. He said it does so for “non-ads” purposes like “measurement, security, integrity, etc.”</p>

<p>It’s not impossible to build a tracker-free website. Encrypted email service <a href="https://themarkup.org/blacklight?url=protonmail.com">ProtonMail</a>, the conservative think tank <a href="https://themarkup.org/blacklight?url=www.aei.org">The American Enterprise Institute</a>, a wiki <a href="https://themarkup.org/blacklight?url=en.bitcoin.it">forum</a> about the cryptocurrency Bitcoin, the <a href="https://themarkup.org/blacklight?url=getlantern.org">website</a> for online censorship circumvention tool Lantern—and <a href="https://themarkup.org/blacklight?url=themarkup.org">The Markup’s website</a>—all came up clean during Blacklight scans.</p>

<p>ProtonMail said it has had to build workarounds, including developing its own anti-fraud system to detect potential credit card abuse before sending user card numbers to its payment processor, Stripe. That was how they got around Stripe’s usual process of collecting payers’ IP and email addresses, said Bart Butler, ProtonMail’s chief technology officer.</p>

<p>“We deliberately set up our company so it is not an option for us to sell out our users,” he said. “That has come with both sacrifices … in terms of what we can do and what we can't do and what we refuse to do. Also, it came with a lot of effort on our part.”</p>

<p>To avoid giving website analytics market leader Google data about every visitor to his website, Butler said Protonmail built proprietary analytics software. Most websites can set up Google Analytics in an hour, he said, but ProtonMail’s system took years to build, cost half a million dollars in server hardware costs alone and requires a permanent full-time staff to continue to maintain it.</p>

<p>“It shouldn't be that you have to roll your own if you want to do this stuff,” Butler said. “Somebody who just cares about privacy and needs privacy, but doesn't have the resources to develop their own, won't be able to do it.</p>

<p>"Privacy,” he added, “should be something people can care about without selling a privacy product.”</p>
<p>This article was <a href="https://themarkup.org/blacklight/2020/09/22/blacklight-tracking-advertisers-digital-privacy-sensitive-websites">originally published on The Markup</a> and was republished under the <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives<a> license.</p>