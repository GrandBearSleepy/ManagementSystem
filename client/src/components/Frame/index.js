import React, { Component } from 'react';
import { Layout, Menu, Button } from 'antd';
import { adminRoutes } from '../../routes';
import { withRouter } from 'react-router-dom';
import Logo from '../Logo'
import './frame.less';


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

    const { logout } = this.props
   
  return (
    <Layout style={{ minHeight: '100%' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Logo/>

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
      <Layout>
        <Header className="header mg-header">
          <Button 
            className='logout'
            onClick={logout}
            style={{ float: 'right', marginTop: '30px' }}>Logout</Button>
        </Header>
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
  )
}




}
export default Frame;