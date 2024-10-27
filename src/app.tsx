import React, { useState, useEffect } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import './app.css';

// import "primeicons/primeicons.css";
import { Menubar } from 'primereact/menubar';
import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';
import Logo from './logo';
import { TabPanel, TabView } from 'primereact/tabview';

function App() {
  const itemRenderer = (item: any) => (
    <a className="align-items-center p-menuitem-link flex">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && <span className="border-1 surface-border border-round surface-100 ml-auto p-1 text-xs">{item.shortcut}</span>}
    </a>
  );

  const items = [
    {
      label: '首页',
      icon: 'pi pi-home',
    },
    {
      label: '服务与解决方案',
      icon: 'pi pi-star',
      command: () => {
        scrollToTarget('services');
      },
      // items: [
      //   {
      //     label: "客户关系管理",
      //     icon: "pi pi-bolt",
      //     command: () => {
      //       scrollToTarget("services");
      //     },
      //   },
      //   {
      //     label: "自动化发布",
      //     icon: "pi pi-server",
      //   },
      // ],
    },
    {
      label: '案例展示',
      icon: 'pi pi-search',
      items: [
        {
          label: 'APP',
          icon: 'pi pi-pencil',
          // shortcut: "⌘+U",
          command: () => {
            scrollToTarget('cases');
            setTimeout(() => {
              setActiveIndex(0);
            }, 500);
          },
        },
        {
          separator: true,
        },
        {
          label: '企业信息化',
          icon: 'pi pi-palette',
          items: [
            {
              label: '企业官网',
              icon: 'pi pi-palette',
              badge: 3,
              template: itemRenderer,
              command: () => {
                scrollToTarget('cases');
                setTimeout(() => {
                  setActiveIndex(1);
                }, 500);
              },
            },
            {
              label: '乐享喵CRM',
              icon: 'pi pi-palette',
              command: () => {
                scrollToTarget('cases');
                setTimeout(() => {
                  setActiveIndex(1);
                }, 500);
              },
            },
          ],
        },

        {
          label: '方案咨询',
          icon: 'pi pi-bolt',
          command: () => {
            scrollToTarget('cases');
            setTimeout(() => {
              setActiveIndex(2);
            }, 500);
          },
        },
      ],
    },
    {
      label: '关于我们',
      icon: 'pi pi-envelope',
      command: () => {
        scrollToTarget('about');
      },
    },
  ];

  const start = (
    <div className="brand-icon">
      <a className="cursor-pointer" onClick={e => scrollToTarget('root')}>
        <Logo />
        <span>乐享喵</span>
      </a>
    </div>
  );

  const end = <></>;

  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToTarget = (id = 'root') => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      // 判断是否滚动超过第1/2屏
      if (scrollY > windowHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // 监听滚动事件
    window.addEventListener('scroll', handleScroll);

    return () => {
      // 移除滚动事件监听器
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <PrimeReactProvider value={{ unstyled: false }}>
      <div className="bg">
        <div className="bg-circle bg-circle-left"></div>
        <div className="bg-circle bg-circle-right"></div>
      </div>
      <div className="overflow-hidden">
        <div id="header">
          <Menubar className="custom-menubar" model={items} start={start} end={end} />
        </div>
        <div>
          <div className="content-wrapper">
            <div id="home">
              <div>
                <span className="text-900 block text-4xl font-bold">中小企业的数字化集成伙伴</span>
                <span className="text-700 block text-lg">
                  我们为中小企业提供简便、经济、高效的系统集成服务，让各类业务软件顺畅协作，助力企业实现数字化转型。
                </span>
                <ul className="flex list-none flex-wrap gap-5 p-0">
                  <li className="align-items-center flex">
                    <div className="border-circle mr-2 inline-block bg-green-400 p-1"></div>
                    <span className="text-900 font-semibold">便捷</span>
                  </li>
                  <li className="align-items-center flex">
                    <div className="border-circle mr-2 inline-block bg-green-400 p-1"></div>
                    <span className="text-900 font-semibold">经济</span>
                  </li>
                  <li className="align-items-center flex">
                    <div className="border-circle mr-2 inline-block bg-green-400 p-1"></div>
                    <span className="text-900 font-semibold">高效</span>
                  </li>
                </ul>
                <Button outlined className="w-48" label="继续了解" onClick={() => scrollToTarget('services')} />
              </div>
              <div>
                <img className="h-full w-full animate-fade-in-right" src="./images/dashboard-light.png" />
              </div>
            </div>
            <div id="services">
              <div>
                <span className="text-900 mb-6 block text-center text-4xl font-bold">服务与解决方案</span>
                <span className="text-700 mb-12 block text-center text-lg">我们提供以下服务与解决方案，欢迎来电咨询或微信留言！</span>
                <div>
                  <div>
                    <div>
                      <Button icon="pi pi-objects-column" rounded severity="success" aria-label="Bookmark" className="mb-4 block" />
                      {/* <Button icon="pi pi-search" rounded severity="success" aria-label="Search" />
<Button icon="pi pi-user" rounded severity="info" aria-label="User" />
<Button icon="pi pi-bell" rounded severity="warning" aria-label="Notification" />
<Button icon="pi pi-heart" rounded severity="help" aria-label="Favorite" />
<Button icon="pi pi-times" rounded severity="danger" aria-label="Cancel" /> */}
                      <span className="text-900 mb-4 block text-lg font-semibold">系统集成</span>
                      <p className="text-secondary text-700 m-0">
                        在已有的用户管理子系统、权限管理子系统、日志管理子系统的功能之上，进行二次定制化开发。系统灵活可扩展，界面友好。
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <Button icon="pi pi-sitemap" rounded severity="info" aria-label="User" className="mb-4 block" />
                      <span className="text-900 mb-4 block text-lg font-semibold">企业官网设计</span>
                      <p className="text-secondary text-700 m-0">
                        主要提供一站式的网站设计服务，一套站点多端适配，支持手机、小程序，微信公众号、Pad和PC端友好展示。
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <Button icon="pi pi-check-circle" rounded severity="warning" aria-label="Notification" className="mb-4 block" />
                      <span className="text-900 mb-4 block text-lg font-semibold">软件咨询</span>
                      <p className="text-secondary text-700 m-0">
                        提供专业的软件及软件相关的咨询服务，如软件团队组建及人员设置，软件开发周期时效，资源配置合理性，软件投资及合理化建议等。
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <Button className="mb-4 block" icon="pi pi-graduation-cap" rounded severity="help" aria-label="Favorite" />
                      <span className="text-900 mb-4 block text-lg font-semibold">软件培训</span>
                      <p className="text-secondary text-700 m-0">
                        用简单易懂的语言对软件底层架构进行剖析。对软件的原理进行讲解，让客户更好理解软件，从而达到让客户可以更灵活，熟练使用软件的目的。
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <Button className="mb-4 block" icon="pi pi-database" rounded severity="danger" aria-label="Cancel" />
                      <span className="text-900 mb-4 block text-lg font-semibold">数据收集</span>
                      <p className="text-secondary text-700 m-0">
                        若您有大量公用数据需要从互联网定期收集，我们提供在线云平台帮你实现快速批量收集数据的功能。
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <Button className="mb-4 block" icon="pi pi-tags" rounded severity="secondary" aria-label="Filter" />
                      <span className="text-900 mb-4 block text-lg font-semibold">推荐系统设计</span>
                      <p className="text-secondary text-700 m-0">
                        基于Elastic Search或Open Search及大数据做实时推荐系统，实时展示业务数据，为您的业务提供决策依据。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="cases">
              <span className="text-900 mb-6 block text-center text-4xl font-bold">案例展示</span>
              <span className="text-700 mb-12 block text-center text-lg">以下为成功合作案例和在线演示</span>
              <div>
                <TabView activeIndex={activeIndex} onTabChange={e => setActiveIndex(e.index)}>
                  <TabPanel header="APP">
                    <div className="case-wrapper">
                      <div>
                        <a
                          href="https://org.modao.cc/app/8765c832d43cecb58b22fdbefdbdf8358f25a97e?simulator_type=device&amp;sticky=#screen=sk8sjxl7nrly9vg"
                          target="_blank"
                        >
                          <img src="images/portfolio/app-prd.png" alt="" />
                          <div className="details">
                            <h4>天力拍卖</h4>
                            <span>天力APP在线演示（PRD）</span>
                          </div>
                        </a>
                      </div>
                      <div className="portfolio-item filter-web col-span-12 md:col-span-6 lg:col-span-3">
                        <a href="https://lexiangmiao.com/reservation_room_app" target="_blank">
                          <img src="images/portfolio/hotel-reservation-app.png" alt="" />
                          <div className="details">
                            <h4>垂直连锁酒店APP</h4>
                            <span>在线演示简单版（flutter web版）</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel header="企业信息化">
                    <div className="case-wrapper">
                      <div>
                        <a href="https://lexiangmiao.github.io/" target="_blank">
                          <img src="images/portfolio/corporate-site.png" alt="" />
                          <div className="details">
                            <h4>企业官网</h4>
                            <span>在线演示</span>
                          </div>
                        </a>
                      </div>

                      <div className="portfolio-item filter-web col-span-12 md:col-span-6 lg:col-span-3">
                        <a href="http://retail-gw-sit.santechholdings.cn/" target="_blank">
                          <img src="images/portfolio/lxm-crm.png" alt="" />
                          <div className="details">
                            <h4>乐享喵CRM</h4>
                            <span>在线演示系统（手机访问须授权）</span>
                          </div>
                        </a>
                      </div>

                      <div>
                        <a href="https://github.com/jesshaw/chain-hotel-reservation" target="_blank">
                          <img src="images/portfolio/card1.jpg" alt="" />
                          <div className="details">
                            <h4>乐享喵连锁酒店</h4>
                            <span>乐享喵连锁酒店演示系统</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel header="方案咨询">
                    <div className="case-wrapper">
                      <div>
                        <a href="http://47.96.102.25:8761">
                          <img src="images/portfolio/app3.jpg" alt="" />
                          <div className="details">
                            <h4>微服务</h4>
                            <span>预定微服务示例</span>
                          </div>
                        </a>
                      </div>

                      <div>
                        <a href="">
                          <img src="images/portfolio/micro_serivce.png" alt="" />
                          <div className="details">
                            <h4>微服务架构</h4>
                            <span>微服务架构演示</span>
                          </div>
                        </a>
                      </div>

                      {/* <div>
                        <a href="">
                          <img src="images/portfolio/logo1.jpg" alt="" />
                          <div className="details">
                            <h4>Logo 1</h4>
                            <span>Alored dono par</span>
                          </div>
                        </a>
                      </div>

                      <div>
                        <a href="">
                          <img src="images/portfolio/logo3.jpg" alt="" />
                          <div className="details">
                            <h4>Logo 3</h4>
                            <span>Alored dono par</span>
                          </div>
                        </a>
                      </div>

                      <div className="lg:col-span-3 md:col-span-6 col-span-12 portfolio-item filter-web">
                        <a href="">
                          <img src="images/portfolio/web1.jpg" alt="" />
                          <div className="details">
                            <h4>Web 1</h4>
                            <span>Alored dono par</span>
                          </div>
                        </a>
                      </div>

                      <div>
                        <a href="">
                          <img src="images/portfolio/logo2.jpg" alt="" />
                          <div className="details">
                            <h4>Logo 2</h4>
                            <span>Alored dono par</span>
                          </div>
                        </a>
                      </div> */}
                    </div>
                  </TabPanel>
                </TabView>
              </div>
            </div>
            <div id="pricing"></div>
            <div id="about">
              <div>
                <span className="text-900 block text-4xl font-bold">关于我们</span>
                <span className="text-700 block text-lg">
                  我们拥有10年以上软件研发与设计经验，致力于为客户提供专业、易用、适合的企业软件。
                </span>
                <ul className="flex list-none flex-wrap gap-5 p-0">
                  <li className="align-items-center flex">
                    <div className="border-circle mr-2 inline-block bg-green-400 p-1"></div>
                    <span className="text-900 font-semibold">专业</span>
                  </li>
                  <li className="align-items-center flex">
                    <div className="border-circle mr-2 inline-block bg-green-400 p-1"></div>
                    <span className="text-900 font-semibold">高效</span>
                  </li>
                  <li className="align-items-center flex">
                    <div className="border-circle mr-2 inline-block bg-green-400 p-1"></div>
                    <span className="text-900 font-semibold">及时</span>
                  </li>
                </ul>
                <ul className="flex list-none flex-col flex-wrap gap-5 p-0">
                  <li className="align-items-center flex">
                    <i className="pi pi-map-marker text-green-400"></i>
                    <span className="text-900 ml-5">上海市嘉定区秋竹路801弄, 201508</span>
                  </li>
                  <li className="align-items-center flex">
                    <i className="pi pi-envelope text-green-400"></i>
                    <span className="text-900 ml-5">jesshaw@126.com</span>
                  </li>
                  <li className="align-items-center flex">
                    <i className="pi pi-phone text-green-400"></i>
                    <span className="text-900 ml-5">+86 13816820302 （微信可添加）</span>
                  </li>
                </ul>
              </div>
              <div>
                <img className="h-full w-full animate-fade-in-right" src="./images/about-img.jpeg" />
              </div>
            </div>
            <div id="footer">
              <div className="brand-icon mt-4 md:mt-0">
                <a className="mt-6 cursor-pointer" onClick={e => scrollToTarget('root')}>
                  <Logo />
                  <span>乐享喵</span>
                </a>
              </div>
              <div>
                <div>
                  <div className="mt-4 md:mt-0">
                    <h4 className="line-height-3 text-900 mb-3 text-xl font-medium">公司</h4>
                    <a className="line-height-3 text-700 mb-2 block cursor-pointer">关于我们</a>
                    <a className="line-height-3 text-700 mb-2 block cursor-pointer">新闻</a>
                    <a className="line-height-3 text-700 mb-2 block cursor-pointer">投资者关系</a>
                    <a className="line-height-3 text-700 mb-2 block cursor-pointer">招聘</a>
                    <a className="line-height-3 text-700 block cursor-pointer">媒体工具包</a>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <h4 className="line-height-3 text-900 mb-3 text-xl font-medium">资源</h4>
                    <a className="line-height-3 text-700 mb-2 block cursor-pointer">快速开始</a>
                    <a className="line-height-3 text-700 mb-2 block cursor-pointer">学习</a>
                    <a className="line-height-3 text-700 block cursor-pointer">案例研究</a>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <h4 className="line-height-3 text-900 mb-3 text-xl font-medium">社区</h4>
                    <a className="line-height-3 text-700 mb-2 block cursor-pointer">发现</a>
                    <a className="line-height-3 text-700 mb-2 block cursor-pointer">活动</a>
                    <a className="line-height-3 text-700 mb-2 block cursor-pointer">常见问题</a>
                    <a className="line-height-3 text-700 block cursor-pointer">博客</a>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <h4 className="line-height-3 text-900 mb-3 text-xl font-medium">合规</h4>
                    <a className="line-height-3 text-700 mb-2 block cursor-pointer">品牌政策</a>
                    <a className="line-height-3 text-700 mb-2 block cursor-pointer">隐私政策</a>
                    <a className="line-height-3 text-700 block cursor-pointer">服务条款</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isVisible && (
        <Button
          id="scrollToTop"
          icon="pi pi-chevron-up"
          aria-label="Filter"
          tooltip="返回顶部"
          tooltipOptions={{ position: 'left' }}
          onClick={e => scrollToTarget('root')}
        />
      )}
    </PrimeReactProvider>
  );
}
export default App;
