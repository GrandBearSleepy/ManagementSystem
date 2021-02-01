import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { adminRoutes } from '../../routes'
import './frame.less';
import { withRouter } from 'react-router-dom';


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const menus = adminRoutes.filter(route => route.isNav = true);


@withRouter
class Frame extends Component {

  menuOnClick = ({ key }) => {
    this.props.history.push(key)
    console.log(this.props.children)
  }

  render() {
    return (
      <Layout style={{ minHeight: '100%' }}>
        <Header className="header">
          <div className="logo" />
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              onClick={this.menuOnClick}
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              {
                menus.map(menu => {
                  return <SubMenu
                    icon={menu.icon}
                    key={menu.pathname} title={menu.title}>
                    {
                      menu.subMenus.map((subMenu) => {
                        return <Menu.Item key={subMenu.pathname} icon={subMenu.icon}>{subMenu.title}</Menu.Item>
                      })
                    }
                  </SubMenu>
                })
              }
            </Menu>
          </Sider>
          <Layout style={{ padding: '16px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout >
    )
  }




}
export default Frame;